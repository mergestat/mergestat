import { setCookie } from 'cookies-next'
import { constants as HTTP_CONSTANTS } from 'http2'
import * as jose from 'jose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'pg'
import { COOKIE } from 'src/utils/constants'

const { HTTP_STATUS_BAD_REQUEST, HTTP_STATUS_INTERNAL_SERVER_ERROR, HTTP_STATUS_UNAUTHORIZED } = HTTP_CONSTANTS
const { POSTGRES_CONNECTION, JWT_SECRET, INSECURE_SESSION_COOKIE } = process.env

// adminAuth (/api/admin-auth) recieves a user and a password from the client
// and returns a JWT if the password is correct (user exists in the DB)
const adminAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      res.status(HTTP_STATUS_BAD_REQUEST).json({ error: 'must POST to this endpoint' })
      return
    }

    if (!JWT_SECRET) {
      console.warn(JSON.stringify({
        message: 'no JWT_SECRET set, login to UI will not work'
      }))
      res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: 'problem with authentication configuration' })
      return
    }

    const { user, password } = req.body
    const url = new URL(POSTGRES_CONNECTION || '')

    // override the user and password in the connection string with the ones provided by the client
    url.username = user
    url.password = encodeURIComponent(password) // password may contain special characters

    try {
      const client = new Client({
        // use the connection info supplied by the parsed POSTGRES_CONNECTION url
        connectionString: url.toString(),

        // by default this is "no timeout"
        // so we set it here to have a hard limit
        connectionTimeoutMillis: 3000,
      })

      await client.connect()
      await client.end()
    } catch (connectErr) {
      if (connectErr instanceof Error) {
        console.warn(JSON.stringify({
          error: connectErr,
          message: connectErr.message,
        }))
      }
      // if the connection fails, the user does not exist or the password is incorrect
      res.status(HTTP_STATUS_UNAUTHORIZED).json({ error: 'invalid username or password' })
      return
    }

    // set the graphile role to use as the DB user
    const jwt = await new jose.SignJWT({ role: user })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setIssuer('mergestat:mergestat')
      .setAudience('postgraphile')
      .setExpirationTime('5h')
      .sign(new TextEncoder().encode(JWT_SECRET))

    // if the INSECURE_SESSION_COOKIE env variable is set to "1" do not set the secure flag on the cookie
    // this is useful for situations where the UI is running on a private, internal IP (with no SSL)
    const secureCookie = INSECURE_SESSION_COOKIE !== '1'

    setCookie(COOKIE.jwt, jwt, { req, res, httpOnly: true, secure: secureCookie, sameSite: 'strict', path: '/api/graphql' })
    res.json({ loggedIn: true })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else res.status(500).json({ error: 'unknown error encountered' })
  }
}

export default adminAuth

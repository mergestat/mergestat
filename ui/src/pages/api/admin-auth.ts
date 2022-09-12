import type { NextApiRequest, NextApiResponse } from 'next'
import { constants as HTTP_CONSTANTS } from 'http2'
import { createSecretKey } from 'crypto'
import * as jose from 'jose'

const { HTTP_STATUS_BAD_REQUEST, HTTP_STATUS_INTERNAL_SERVER_ERROR, HTTP_STATUS_UNAUTHORIZED } = HTTP_CONSTANTS
const { ADMIN_PASSWORD, JWT_SECRET } = process.env

// adminAuth (/api/admin-auth) recieves a user-supplied "admin password" which gets
// matched against a value supplied as an env token. If there's a match, issue a JWT
// using JWT_SECRET which gets passed to Graphile for authentication
// (used with mergestat-admin role)
const adminAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { adminPassword } = req.body

    if (req.method !== 'POST') {
      res.status(HTTP_STATUS_BAD_REQUEST).json({ error: 'must POST to this endpoint' })
      return
    }

    if (!adminPassword) {
      res.status(HTTP_STATUS_BAD_REQUEST).json({ error: 'must supply an admin password' })
      return
    }

    if (!ADMIN_PASSWORD || !JWT_SECRET) {
      if (!ADMIN_PASSWORD) console.warn('no ADMIN_PASSWORD set, login to UI will not work')
      if (!JWT_SECRET) console.warn('no JWT_SECRET set, login to UI will not work')

      res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: 'problem with authentication configuration' })
      return
    }

    if (adminPassword === ADMIN_PASSWORD) {
      const jwt = await new jose.SignJWT({ role: 'mergestat_admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer('mergestat:fuse')
        .setAudience('postgraphile')
        .setExpirationTime('5h')
        .sign(createSecretKey(JWT_SECRET, 'utf8'))

      res.json({ token: jwt })
    } else {
      res.status(HTTP_STATUS_UNAUTHORIZED).json({ error: 'incorrect password supplied' })
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else res.status(500).json({ error: 'unknown error encountered' })
  }
}

export default adminAuth

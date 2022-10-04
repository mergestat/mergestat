import { setCookie } from 'cookies-next'
import { constants as HTTP_CONSTANTS } from 'http2'
import type { NextApiRequest, NextApiResponse } from 'next'
import { COOKIE } from 'src/utils/constants'

const { HTTP_STATUS_BAD_REQUEST } = HTTP_CONSTANTS

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      res.status(HTTP_STATUS_BAD_REQUEST).json({ error: 'must POST to this endpoint' })
      return
    }

    setCookie(COOKIE.jwt, '', { req, res, maxAge: -1, httpOnly: true, secure: true, sameSite: 'strict', path: '/api/graphql' })
    res.json({ loggedOut: true })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else res.status(500).json({ error: 'unknown error encountered' })
  }
}

export default logout

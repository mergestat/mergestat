import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'
export const config = {
  api: {
    externalResolver: true,
  },
}

const proxy = (req: NextApiRequest, res: NextApiResponse) => (
  httpProxyMiddleware(req, res, {
    target: process.env.POSTGRAPHILE_API,
    ignorePath: true,
  })
)

export default proxy

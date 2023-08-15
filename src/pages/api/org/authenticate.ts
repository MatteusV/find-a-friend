import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email, password } = req.body

  const org = await prisma.org.findFirst({
    where: {
      email,
      password_hash: password,
    },
  })

  setCookie({ res }, '@findafriend:orgId', org.id, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    path: '/',
  })

  return res.status(201).json(org)
}

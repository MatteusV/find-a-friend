import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'
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

  if (!email || !password) {
    return res.status(500).json({ error: 'Didn`t provide email or password' })
  }

  const org = await prisma.org.findUnique({
    where: {
      email,
    },
  })

  if (!org) {
    return res.status(500).json({ error: 'Not found organization' })
  }

  const doesPasswordMatches = compare(password, org.password_hash)

  if (!doesPasswordMatches) {
    return res.status(405).json({ error: 'Invalid credentials' })
  }

  setCookie({ res }, '@find-a-friend:orgId', org.id, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    path: '/',
  })

  return res.status(201).json(org)
}

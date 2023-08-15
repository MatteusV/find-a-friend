import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, email, zipCode, address, whatsapp, password } = req.body

  const orgWithSameEmail = await prisma.org.findUnique({
    where: {
      email,
    },
  })

  if (orgWithSameEmail) {
    return res.status(400).json({ message: 'Email already exists.' })
  }

  const org = await prisma.org.create({
    data: {
      responsible_name: name,
      email,
      zip_code: zipCode,
      address,
      whatsapp,
      password_hash: password,
    },
  })

  return res.status(201).json(org)
}

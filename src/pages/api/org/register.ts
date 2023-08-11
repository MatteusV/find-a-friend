import type { NextApiRequest, NextApiResponse } from 'next'

interface RequestBodyProps {
  email: string
  password_hash: string
  responsibleName: string
  zipCode: number
  address: string
  whatsapp: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {}

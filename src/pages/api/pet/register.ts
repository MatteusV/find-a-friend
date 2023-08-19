import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const {
    name,
    about,
    energyLevel,
    levelOfIndependece,
    age,
    size,
    environment,
    files,
  } = req.body

  const pet = await prisma.pet.create({
    data: {
      name,
      age,
      about,
      energy_level: energyLevel,
      environment,
      independence_level: levelOfIndependece,
      size,
    },
  })

  if (!pet) {
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

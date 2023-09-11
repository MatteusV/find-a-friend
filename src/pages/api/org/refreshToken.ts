// import type { NextApiRequest, NextApiResponse } from 'next'
// import { cookies } from 'next/headers'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' })
//   }
//   const { refreshToken } = req.body
//   const cookieStore = cookies()

//   cookieStore.set('refreshToken', refreshToken, {
//     httpOnly: true,
//     path: '/',
//     secure: true,
//     sameSite: true,
//   })
// }

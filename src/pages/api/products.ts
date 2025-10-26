import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const data = [{
      id: 1,
      title: 'T-Shirts'
    }]
    
    const tokenCookie = req.cookies.authToken
    console.log("tokenCookie:", tokenCookie)
    
    res.status(200).json({ data })
  } 
  else if (req.method === 'POST') {
    const prod = req.body
    
    const tokenCookie = req.cookies.authToken
    console.log("tokenCookie:", tokenCookie)
    
    const authorization = req.headers.authorization
    console.log("Authorization", authorization)
    
    const data = [{
      id: 1,
      title: 'T-Shirt',
      prod: prod
    }]
    
    res.status(200).json({ data })
  }
  else {
    res.status(405).json({ data: [] })
  }
}
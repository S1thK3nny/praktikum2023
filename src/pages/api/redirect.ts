// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToMongo } from '../utils/connectToMongo'
import redirect from '../../models/redirect'

type Data = Link

type Link = {
  link: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method === 'GET') {
        await connectToMongo();
        const key = req.body.key;
        console.log(key)
        return res.redirect('../')
    }
    else {
        console.log("User tried anything but GET: api/redirect.ts")
        console.log(req.method)
    }
}
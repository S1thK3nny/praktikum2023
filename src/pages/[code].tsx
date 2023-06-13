import { useRouter } from 'next/router'
import { NextApiRequest, NextApiResponse } from "next";

type Data = Link

type Link = {
  link: string
}
 
export default function Page(
    req: NextApiRequest,
    res: NextApiResponse<Data>) {
  const router = useRouter()
  return <p>Post: {router.query.url}</p>
}
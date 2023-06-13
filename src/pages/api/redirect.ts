import { NextApiRequest, NextApiResponse } from "next";
import redirect from '../../models/redirect'
import {connectToMongo} from '../../utils/connectToMongo'

type Data = {
    url: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    await connectToMongo();
    const key = req.body.key

    if (key === "[code]") {
        res.json({ url: '/' });
        return
    }

    const url = await redirect.findOne({ key: key });

    if (url) {
        res.json({ url: url.url });
        return
    }
    res.json({ url: '/' + key });
}
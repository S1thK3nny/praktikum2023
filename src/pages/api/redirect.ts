import { NextApiRequest, NextApiResponse } from "next";
import redirect from '../../models/redirect'
import {connectToMongo} from '../../utils/connectToMongo'
import createStatistics from "@/utils/createStatisticsForEntry";

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

    const data = await redirect.findOne({ key: key });

    if (data) {
        res.json({ url: data.url });
        createStatistics(req, key, data.expireAt);

        return
    }
    //Redirect user to the main page incase the link does not work
    else {
        const website = process.env.REACT_APP_WEBSITE + '/invalid' || "default-value";
        res.json({ url: website });
        return
    }
}
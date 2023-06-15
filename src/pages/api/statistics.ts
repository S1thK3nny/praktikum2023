// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToMongo} from '../../utils/connectToMongo'
import statistics from '../../models/statistics'
//Use .. to get out of a folder


type Data = Statistics | StatisticsNotFound

//Whatever comes before the string is what the response will receive, so if you type link, you will get link. Not url!
type Statistics = {
    clicked:Date;
    language:string;
    browser_agent:string;
    browser:string;
    platform:string;
    user_OS:string;
}

type StatisticsNotFound = {
    error: String;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('POST method request: api/statistics.ts');

    await connectToMongo();
    const key = req.body.key;

    const foundStats = await statistics.findOne({ key: key });

    if(foundStats) {
        res.status(200).json({
            clicked: foundStats.clicked,
            language: foundStats.language,
            browser_agent: foundStats.userAgent,
            browser: foundStats.browser,
            platform: foundStats.platform, 
            user_OS: foundStats.user_OS 
        });
        return
    }

    else {
        res.status(400).json({ error: 'Are you sure this key exists? Check your spelling!' });
        return
    }
}
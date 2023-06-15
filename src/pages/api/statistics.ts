// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToMongo } from '../../utils/connectToMongo'
import statistics from '../../models/statistics'
//Use .. to get out of a folder


type Data = StatisticsFound | StatisticsNotFound

type StatisticsFound = {
    statistics: Statistics[];
}

//Whatever comes before the string is what the response will receive, so if you type link, you will get link. Not url!
type Statistics = {
    clicked: Date;
    language: string;
    browser_agent: string;
    browser: string;
    platform: string;
    user_OS: string;
}

type StatisticsNotFound = {
    error: String;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    await connectToMongo();
    const key = req.body.key;

    const foundStats = await statistics.find({ key: key });

    if (foundStats) {
        let statistics: Statistics[] = []

        foundStats.forEach((item) => {
            const statistic: Statistics = {
                clicked: item.clicked,
                language: item.language,
                browser_agent: item.browser_agent,
                browser: item.browser,
                platform: item.platform,
                user_OS: item.user_OS
            }
            statistics.push(statistic)
        });

        res.status(200).send({
            statistics: statistics,
        });
        return;
    }

    else {
        res.json({ error: 'Are you sure this key exists? Check your spelling!' });
        return;
    }
}
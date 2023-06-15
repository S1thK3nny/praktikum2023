import type { NextApiRequest } from 'next'
import statistics from '../models/statistics'
import * as Bowser from 'bowser';

export default async function createStatistics(req: NextApiRequest, key: string) {
    let userAgent;
    let language;
    if (req) { //If you are on the server and you get a 'req' property from your context.
      userAgent = req.headers['user-agent']; //Get the user-agent from the headers
      language = req.headers['accept-language'];
    } else {
      userAgent = navigator.userAgent; //If you are on the client you can access the navigator from the window object
      language = navigator.language;
    }

    const browserInfo = Bowser.parse(userAgent || ''); // DO NOT PRINT THIS!!!

    const preferredLanguage = returnPreferredLanguage(language || 'Unknown');
    const browserName = browserInfo.browser.name || 'Unknown';
    const deviceType = browserInfo.platform.type || 'Unknown';
    const operatingSystem = browserInfo.os.name || 'Unknown';
    const operatingSystemVersion = browserInfo.os.version || 'Unknown';



    const statisticsForThisLink = await statistics.create({ 
      key: key,
      clicked: new Date(),
      language: preferredLanguage,
      browser_agent: userAgent,
      browser: browserName, 
      platform: deviceType, 
      user_OS: operatingSystem + " " + operatingSystemVersion 
    });
}

//Users can have multiple preferences of languages. Split them, take the first one.
const returnPreferredLanguage = (language: string):string => {
    const languageParts = language ? language.split(',') : [];
    const preferredLanguage = languageParts.length > 0 ? languageParts[0] : 'Unknown'; //Operations like this look cool as hell, not even lying.
    return preferredLanguage;
}
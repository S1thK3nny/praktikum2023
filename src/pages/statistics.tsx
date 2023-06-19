import Head from 'next/head'
import TopBar from '@/components/TopBar';
import { handleInputChange, hideAlertShowLink } from "../utils/sharedComponents"
import axios from 'axios';
import React, { useState } from 'react';
import Copyright from '@/components/copyright';
import formatDate from '@/utils/formatDate';

//Whatever comes before the string is what the response will receive, so if you type link, you will get link. Not url!
type Statistics = {
    clicked: Date;
    language: string;
    browser_agent: string;
    browser: string;
    platform: string;
    user_OS: string;
}

export default function Statistics() {
    const [fetched, setFetched] = useState(false);

    const handleInputChangeTextField = () => {
        handleInputChange('Fetch');
        setFetched(false)
    };

    async function onHandleSubmit(event: any) {
        event.preventDefault();

        const textFieldInput = (document.getElementById('keyTextField') as HTMLInputElement).value;

        const res = await axios.post(process.env.REACT_APP_WEBSITE + "api/statistics", { key: textFieldInput });

        if (res.data.error || res.data.statistics.length === 0) {
            console.log('This is NOT a valid key: ' + textFieldInput);
            hideAlertShowLink(false);
            setFetched(false)

        } else if(!res.data.error && !fetched) {
            const data: Statistics[] = res.data.statistics; // Extract the statistics data from the response
            console.log('This is a valid key: ' + textFieldInput);
            createTableRows(data); // Call the createTableRows function to populate the table
            hideAlertShowLink(true);
            setFetched(true)
        }
    }

    function createTableRows(data: Statistics[]) {
        const tableBody = document.getElementById("table-body")!;
        tableBody.innerHTML = ""; // Clear the existing table rows

        // Loop through the data and generate table rows dynamically
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const row = document.createElement("tr");

            const clickedCell = document.createElement("td");
            clickedCell.textContent = formatDate(item.clicked); // Convert Date to string
            row.appendChild(clickedCell);

            const languageCell = document.createElement("td");
            languageCell.textContent = item.language;
            row.appendChild(languageCell);

            const browserAgentCell = document.createElement("td");
            browserAgentCell.textContent = item.browser_agent;
            row.appendChild(browserAgentCell);

            const browserCell = document.createElement("td");
            browserCell.textContent = item.browser;
            row.appendChild(browserCell);

            const platformCell = document.createElement("td");
            platformCell.textContent = item.platform;
            row.appendChild(platformCell);

            const userOSCell = document.createElement("td");
            userOSCell.textContent = item.user_OS;
            row.appendChild(userOSCell);

            tableBody.appendChild(row);
        }
    }



    return (
        <>
            <Head>
                <title>Statistics</title>
                <meta name="description" content="Who doesn't love stalking?" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-auto h-full bg-customBGStats bg-no-repeat bg-cover bg-center absolute w-screen">
                <TopBar backgroundColor={'bg-lime-500'} showMain={true} />
                <div className="justify-center items-center h-screen flex flex-col gap-2 text-center">

                    <h1 className='font-bold text-4xl md:text-8xl mb-10'>
                        Want to know more about your users?
                    </h1>



                    <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 border-4 border-indigo-400 border-opacity-50 hover:border-opacity-100 transition-all duration-500" onSubmit={onHandleSubmit}>
                        <div>
                            <label className="block text-gray-700 text-md font-bold mb-2 text-left">
                                Enter the key of a shortened link
                            </label>

                            <input className="shadow text-left appearance-none border rounded-lg md:rounded-l-lg md:rounded-r-none w-full md:w-96 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:on"
                                id="keyTextField" type="text"
                                placeholder="e.g. 67Rsyv" required autoFocus onChange={handleInputChangeTextField} />

                            <button className='text-white shadow-md rounded-lg w-full md:w-32 md:rounded-r-lg md:rounded-l-none bg-indigo-400 hover:bg-indigo-300' id='submitButton'>Fetch</button>

                            <div role="alert" id='alertDiv' className='hidden mt-4'>
                                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                    Key not found
                                </div>
                                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                    <p>The key you entered does not seem to exist in the database, or, no one has clicked on the link yet. Sad!</p>
                                </div>
                            </div>

                        </div>
                    </form>

                    <div className="container mx-auto px-1 md:px-4 hidden mb-9
                    overflow-auto overflow-x-auto" id='hiddenDiv'>
                        <table className="bg-white text-black justify-center text-xs w-full md:text-lg
                        border-indigo-400 border-4 border-separate 
                        border-opacity-50 hover:border-opacity-100 transition-all duration-500
                        rounded-lg shadow-lg">
                            <thead>
                                <tr className='py-4 px-1 md:px-4'>
                                    <th>Clicked</th>
                                    <th>Language</th>
                                    <th>Browser Agent</th>
                                    <th>Browser</th>
                                    <th>Platform</th>
                                    <th>User OS</th>
                                </tr>
                            </thead>
                            <tbody id="table-body">

                            </tbody>
                        </table>
                    </div>

                    <Copyright/>

                </div>
            </div>
        </>
    )
}
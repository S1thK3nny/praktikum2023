import { Inter } from 'next/font/google'
import TopBar from "../components/TopBar"
import Head from 'next/head'
import React, { useState } from 'react';
import isURL from "../utils/isURL"
import { handleInputChange, hideAlertShowLink } from "../utils/sharedComponents"
import axios from 'axios'
import Copyright from '@/components/copyright';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  let copiedAmount = 1;

  async function onHandleSubmit(event: any) {
    //Typescript is typesafe. Use '(... as HTMLInputElement)' to grab the .value
    const textFieldInput = (document.getElementById('textField') as HTMLInputElement).value
    const checkboxIsChecked = (document.getElementById('expireCheckbox') as HTMLInputElement).checked

    //Use "!" to prevent it from warning you about nulls
    const link = document.getElementById('link')!
    const submitButton = document.getElementById('submitButton')!

    //This prevents a page reload.
    event.preventDefault()

    if (submitted && isURL(textFieldInput)) {

      if (copiedAmount === 20) {
        submitButton.textContent = "Stop"
        return;
      }

      if (submitButton.textContent?.includes('Copied!')) {
        submitButton.textContent = 'Copied! ' + copiedAmount;
        copiedAmount++;
        return;
      }

      try {
        await navigator.clipboard.writeText(link.textContent!);
        submitButton.textContent = 'Copied!'
      } catch (error) {
        submitButton.textContent = 'Failed!'
      }

      return;
    }

    setSubmitted(true);

    //If it's a correct URL, create the key and show it.
    if (isURL(textFieldInput)) {
      console.log('This is a URL: ' + textFieldInput)
      const res = await axios.post("/api/create", { url: textFieldInput, expire: checkboxIsChecked });
      const data = await res.data;

      hideAlertShowLink(true);

      link.textContent = data.url
      link.setAttribute("href", `${data.url}`);

      submitButton.textContent = 'Copy?'
    }

    else {
      console.log('This is NOT a URL: ' + textFieldInput)
      hideAlertShowLink(false);
    }

  }

  const handleInputChangeTextField = () => {
    // Reset the submitted state when a new input is entered
    setSubmitted(false);
    handleInputChange('Shorten')
  };



  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <meta property="og:title" content="URL Shortener" />
        <meta name="description" content="Free URL Shortener fit for any desires." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-customBG bg-no-repeat bg-cover bg-center absolute w-screen">

        <TopBar backgroundColor={'bg-indigo-500'} showMain={false} />

        <div className="justify-center items-center h-screen flex px-8">
          <form /* Form in the center of the screen */
            className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 border-4 border-coolorange border-opacity-50 hover:border-opacity-100 transition-all duration-500" onSubmit={onHandleSubmit}>

            <div>
              <label className="block text-gray-700 text-md font-bold mb-2 text-left">
                Ready to shorten?
              </label>

              <input /* URL Input */
                className="shadow text-left appearance-none border rounded-lg md:rounded-l-lg md:rounded-r-none w-full md:w-96 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:on"
                id="textField" type="url" onChange={handleInputChangeTextField}
                placeholder="Enter the link" required autoFocus />

              <button className='text-white shadow-md rounded-lg w-full md:w-32 md:rounded-r-lg md:rounded-l-none' id='submitButton'>Shorten</button>

              <div /* Checkbox for expire after 5 days */
                className="flex items-center mt-2">
                <input id="expireCheckbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                <label className="ml-2 text-sm font-medium text-slate-800">Expire after 5 days?</label>
              </div>

              <div className='mt-4 text-md md:text-lg hidden items-center justify-center"' id='hiddenDiv'>
                <div>
                  <label className="text-black text-center">
                    Shortened link:&nbsp;
                  </label>

                  <Link href='/' className="text-blue-500 hover:underline" id='link' target='_top'>
                    ${process.env.REACT_APP_WEBSITE}
                  </Link>

                </div>
              </div>

              <div role="alert" id='alertDiv' className='hidden mt-4'>
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Misinput
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>This doesn&apos;t seem like a URL...</p>
                </div>
              </div>

            </div>
          </form>

          <Copyright />

        </div>
      </div>
    </>
  )
}
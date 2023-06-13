import { Inter } from 'next/font/google'
import TopBar from "./TopBar"
import Head from 'next/head'
import React, { useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <meta name="description" content="S1th rulez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-customBG bg-no-repeat bg-cover bg-center absolute w-screen">

        <TopBar/>

        <div className="justify-center items-center h-screen flex px-8">

          <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 border-4 border-coolorange border-opacity-50 hover:border-opacity-100 transition-all duration-500">
            <div className="mb-4">

              <label className="block text-gray-700 text-md font-bold mb-2 text-left">
                Ready to shorten?
              </label>
              <input className="shadow text-left appearance-none border rounded-lg md:rounded-l-lg md:rounded-r-none w-full md:w-96 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:on" 
              id="textField" type="url"
              placeholder="Enter the link" required autoFocus/>

              <button className='text-white shadow-md rounded-lg w-full md:w-32 md:rounded-r-lg md:rounded-l-none'>Shorten</button>

            </div>
          </form>

          <p className="text-center text-gray-500 text-xs fixed bottom-0 py-5">
            &copy;2023 namespace.media
          </p>

        </div>
      </div>
      <script></script>
    </>
  )
}
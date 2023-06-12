import { Inter } from 'next/font/google'
import TopBar from "./TopBar"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen bg-slate-100">

      <TopBar/>

      <div className="justify-center items-center h-screen flex">

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-indigo-600 border-opacity-50 hover:border-opacity-100 transition-all duration-200">
            <div className="mb-4">

              <label className="block text-gray-700 text-md font-bold mb-2 text-left">
                Ready to shorten?
              </label>
              <input className="shadow text-left appearance-none border rounded-l-lg w-128 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:on" id="url" type="url" placeholder="Enter the link" required autoFocus/>
              <button className='text-white border-indigo-50 shadow-md rounded-r-lg'>Shorten</button>

            </div>
          </form>

          <p className="text-center text-gray-500 text-xs fixed bottom-0 py-5">
          &copy;2023 namespace.media
          </p>

      </div>
    </div>
  )
}

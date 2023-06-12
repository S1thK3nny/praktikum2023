import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopBar from "./TopBar"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen bg-slate-100'>

      <TopBar/>

      <div className="justify-center items-center h-screen flex">

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-indigo-600 border-opacity-50 hover:border-opacity-100 transition-all duration-200">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Ready to shorten?
              </label>
              <input className="shadow text-left appearance-none border rounded w-128 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" type="text" placeholder="Enter the link" />
            </div>
          </form>

      </div>
    </div>
  )
}

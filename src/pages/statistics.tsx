import Head from 'next/head'
import TopBar from '@/components/TopBar';

export default function invalid() {

    return (
        <>
            <Head>
                <title>Invalid URL</title>
                <meta name="description" content="Something went wrong... Are you sure, that this is a valid URL?" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen bg-customBGStats bg-no-repeat bg-cover bg-center absolute w-screen">
                <TopBar backgroundColor={'bg-lime-500'}/>
                <div className="justify-center items-center h-screen flex flex-col gap-16 md:gap-24 text-center">
                    <h1 className='font-bold, text-4xl md:text-8xl'>
                        Something went wrong...
                    </h1>
                    <div>
                        <h2 className='font-semibold, text-2xl md:text-4xl'>
                            You seem to have followed an invalid link, and now we are both here....
                        </h2>
                        <button className='shadow-lg mt-4 md:mt-8 md:w-96 md:h-24 bg-indigo-600 hover:bg-indigo-500 rounded-lg md:text-2xl'>
                            Return to main page?
                        </button>
                    </div>
                    <p className="text-center text-gray-500 text-xs fixed bottom-0 py-5">
                        &copy;2023 namespace.media
                    </p>
                </div>
            </div>
        </>
      )
}
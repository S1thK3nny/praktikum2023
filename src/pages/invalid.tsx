import Head from 'next/head'
import { useRouter } from 'next/router';
import TopBar from '@/components/TopBar';
import Copyright from '@/components/copyright';

//make sure you start with a capital letter, React does NOT like it when you do not.
export default function Invalid() {
    const Router = useRouter();

    const RedirectToMain = () => {
        Router.push('/');
    }

    return (
        <>
            <Head>
                <title>Invalid URL</title>
                <meta name="description" content="Something went wrong... Are you sure, that this is a valid URL?" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen bg-customBGInvalid bg-no-repeat bg-cover bg-center absolute w-screen">
                <TopBar backgroundColor={'bg-red-500'} showMain={true} />
                <div className="justify-center items-center h-screen flex flex-col gap-16 md:gap-24 text-center">
                    <h1 className='font-bold text-4xl md:text-8xl'>
                        Something went wrong...
                    </h1>
                    <div>
                        <h2 className='font-semibold, text-2xl md:text-4xl'>
                            You seem to have followed an invalid link, and now we are both here....
                        </h2>
                        <button className='shadow-lg mt-4 md:mt-8 md:w-96 md:h-24 bg-indigo-600 hover:bg-indigo-500 rounded-lg md:text-2xl' onClick={RedirectToMain}>
                            Return to main page?
                        </button>
                    </div>
                    <Copyright />
                </div>
            </div>
        </>
    )
}
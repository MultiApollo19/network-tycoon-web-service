import { BASE_URL } from "../lib/constraints";
import Head from 'next/head'


export default function Debug(){
    return(
        <>
        <Head>
        <title>Tornado | Home</title>
        <meta name="description" content="Managment app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-indigo-700 flex flex-col items-center justify-center m-auto w-3/4 h-3/4 border-4 border-black">
            <h1 className="flex text-red-600 text-3xl text-center underline">DEBUG!</h1>
            <ul className="list-none list-outside p-10">
            <li className="text-white text-xl">API_final {BASE_URL}</li>
                <li className="text-white text-xl">NEXT_PUBLIC_GITHUB_SECRET {process.env.NEXT_PUBLIC_GITHUB_SECRET}</li>
                <li className="text-white text-xl">NEXT_PUBLIC_DATABASE_URL {process.env.NEXT_PUBLIC_DATABASE_URL}</li>
                <li className="text-white text-xl">NEXT_PUBLIC_API_URL {process.env.NEXT_PUBLIC_API_URL}</li>
                <li className="text-white text-2xl text-bold">VERCEL</li>
                <li className="text-white text-xl">VERCEL_ENV {process.env.NEXT_PUBLIC_VERCEL_ENV}</li>
                <li className="text-white text-xl">VERCEL_URL {process.env.NEXT_PUBLIC_VERCEL_URL}</li>
                
            </ul>
        </div>
        </>
        
    );
}
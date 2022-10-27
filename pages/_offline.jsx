
import Head from 'next/head'


const Fallback =() =>{
    <div className="login-window">
            <Head>
            <title>Tornado | Offline</title>
            </Head>
            <h1 className="flex text-3xl text-black underline pb-4">Looks like you are offline, come back if you will be have network connection 😎</h1>
            
        </div>
}

export default Fallback
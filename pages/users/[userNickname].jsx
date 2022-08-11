import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BASE_URL } from '@/lib/constraints'

export default function User({user}) {

    const router = useRouter()
    if(router.isFallback){
        return <div className="login-window">Loading...</div>
    }
    if(user){
        return (
            <div className="login-window">
              <Head>
                <title>Tornado | User</title>
                <meta name="description" content="Managment app" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <h1 className='m-2'>{user[0].nickname}</h1>
              <Image src={user[0].avatar_url} width='128' height='128' className='avatar'/>
               
            </div>
          )
    }
  
}

export async function getStaticProps(context){
    const {params}=context
    const response = await fetch(`${BASE_URL}/api/users/${params.userNickname}`)
    
    const data = await response.json()

    return{
        props:{
            user: data,
        }
    }
}

export async function getStaticPaths(){
    return{
        paths:[{params:{userNickname: 'MultiApollo19'}}],
        fallback: true
    }
}
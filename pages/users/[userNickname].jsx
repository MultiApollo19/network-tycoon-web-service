import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BASE_URL } from '@/lib/constraints'
import {supabase} from "@/lib/supabase"

export default function User({user}) {
    if(!user){
        <div className="login-window">
              <Head>
                <title>Tornado | User</title>
                <meta name="description" content="Managment app" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <div>Loading...</div>
               
            </div>
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

    let response = null;
    try{
        response = await supabase.from('users').select('*',{ count: 'exact' }).match({nickname: params.userNickname})
    }catch(err){};
     
    

    return{
        props:{
            user: response.body,
        },
        revalidate: 86400,
    }
}

export async function getStaticPaths(){
    const response = await supabase.from('users').select();
    const body = response.body;

    const paths = body.map(user=>{
        return{
            params: {userNickname: user.nickname},
            
        }
    })
    return{
        paths,
        fallback: true,
    }
    
}
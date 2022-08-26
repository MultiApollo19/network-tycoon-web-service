import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL } from '@/lib/constraints'
import Link from "next/link";
import {supabase} from "@/lib/supabase"

export default function Users({users}) {




  
  return (
    <div className="login-window">
      <Head>
        <title>Tornado | Users</title>
      </Head>
      <h1>List of users</h1>
      <div className="flex-row">
      {users.map(user=>{
        return(
            <div key={user.user_id}>
                <Link href={`/users/${user.nickname}`}>
                <div className="sidebar-icon group">
                <Image src={user.avatar_url} width='50' height='50' className='avatar'/>

                    <div className="sidebar-tooltip group-hover:scale-100">
                    {user.nickname}
                    </div>
                 </div>
                 </Link>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export async function getStaticProps(){
    const response = await supabase.from('users').select();

    
    return{
        props:{
            users: response.body,
        },
        revalidate: 86400,
    }
}
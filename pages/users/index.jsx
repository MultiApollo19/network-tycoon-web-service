import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL } from '@/lib/constraints'
import Link from "next/link";

export default function Users({users}) {
  return (
    <div className="login-window">
      <Head>
        <title>Tornado | Users</title>
        <meta name="description" content="Managment app" />
        <link rel="icon" href="/favicon.ico" />
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
    const response = await fetch(`https://tornadodev.vercel.app/api/users`)
    
    const data = await response.json()


    return{
        props:{
            users: data,
        }
    }
}
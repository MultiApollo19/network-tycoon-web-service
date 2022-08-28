import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL } from '@/lib/constraints'
import Link from "next/link";
import { createClient } from "contentful";

export default function Updates({updates}) {

//console.log(updates)


  
  return (
    <div className="login-window">
      <Head>
        <title>Tornado | Update</title>
      </Head>
      <h1 className='mb-2 text-2xl'>Update list</h1>
      <div className="flex-row">
      {updates.map(update=>{
        return(
          <div key={update.fields.slug} className='flex flex-col border-2 p-2 hover:bg-blue-700 hover:text-black ease-linear cursor-pointer'>
          <Link href={`/update/${update.fields.slug}`}>
          
              <div>
              <h2>{update.fields.title}</h2>
              <h2 className='text-xs'>{update.fields.shortDescription}</h2>
               
              <Image src={'https://'+update.fields.featuredimage.fields.file.url} width='256' height='128' className=''/>
              </div>
              

              
              
               
          
          </Link>
          </div>
      )
      }   
      )}
        
      </div>
    </div>
  )
}

export async function getStaticProps(){
  

const client = createClient({
    space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_UPDATE,
    accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_KEY_UPDATE,
})
    const response = await client.getEntries()
    return{
        props:{
            updates: response.items,
        }
    }
}
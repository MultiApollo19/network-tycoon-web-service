import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL } from '@/lib/constraints'
import Link from "next/link";
import { createClient } from "contentful";

export default function Updates({updates}) {

//console.log(updates)


  var updatesNumber = 0
  return (
    <div className="update-window">
      <Head>
        <title>Tornado | Update</title>
      </Head>
      <h1 className='mb-2 mx-auto top-0 text-3xl static'>Update list</h1>
      <div className="flex-col flex items-center justify-center overflow-y-auto">
      {updates.map(update=>{
        updatesNumber++;
        console.log(updatesNumber)
        if(updatesNumber===1){
          return(
            <div key={update.fields.slug} className='flex flex-col border-2 p-2 hover:bg-blue-700 hover:text-black ease-linear items-center justify-center cursor-pointer w-3/4'>
            <Link href={`/update/${update.fields.slug}`}>          
                <div className=''>
                  <h2>{update.fields.title}</h2>
                  <h2 className='text-xs'>{update.fields.shortDescription}</h2>
                 
                  <Image src={'https:'+update.fields.featuredimage.fields.file.url} width='512' height='256' className=''/>
                </div>         
            </Link>
            </div>
        )
        }
        else{
          return(
            <div key={update.fields.slug} className='flex flex-col border-2 p-2 hover:bg-blue-700 hover:text-black ease-linear cursor-pointer items-center justify-center w-3/4'>
            <Link href={`/update/${update.fields.slug}`}>          
                <div className=''>
                  <h2>{update.fields.title}</h2>
                  <h2 className='text-xs'>{update.fields.shortDescription}</h2>                
                </div>         
            </Link>
            </div>
        )
        }
        
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
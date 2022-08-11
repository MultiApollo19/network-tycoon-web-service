import { supabase } from '@/lib/supabase';
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Image from "next/image";

export default function Profile(){
    const router = useRouter();
    const [user,setUser] = useState('')

    useEffect(()=>{
        const user = supabase.auth.user()
        console.log(user)
        setUser(user)
    }    
    ,[])
    async function handleSubmit(event){        
        event.preventDefault();

        const avatar = event.target.file
        if(user){
            uploadAvatar(avatar)
        }
        
    }

    async function uploadAvatar(event){
        event.preventDefault();
        console.log(event.target.files[0])
        if (!event.target.files || event.target.files.length === 0) {
            alert("You must select image!")
        }else{
            
            const { data, error } = await supabase
            .storage
            .from('avatars')
            .list(`${user.id}`, {
            })
            console.log(data)
            if(!data.length==0){
                await supabase.storage.from('avatars').remove(`${user.id}/${data[0].name}`)
            }
            
            

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${user.id}/${fileName}`    
            await supabase.storage.from('avatars').upload(filePath, file)
            const {publicURL} = supabase.storage.from('avatars').getPublicUrl(filePath)
            
            await supabase.auth.update({ 
                data: { avatar: publicURL } 
              })
              await supabase
            .from('users')
            .update({ avatar_url: publicURL })
            .match({user_id: user.id })

            router.reload()
            router.push('/')

              
        }
        
        
        

        console.log(user)
    }
    if(user){
        return(
        
            <div className="profile-window">
                <Head>
                <title>Tornado | Profile</title>
                <meta name="description" content="Managment app" />
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="flex text-3xl text-black underline pb-4">Profile settings</h1>
                    <Image src={user.user_metadata.avatar} width='72' height='72' className='rounded-xl'/>

                    <input type="file" id="single" accept="image/png,image/jpeg" onChange={uploadAvatar}/>
                          
                
                
            
            </div>
        )
    }else{
        return(
        
            <div className="profile-window">
                <Head>
                <title>Tornado | Profile</title>
                <meta name="description" content="Managment app" />
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="flex text-3xl text-black underline pb-4">Profile settings</h1>          
                YOU MUST BE LOGGED!
            </div>
        )
    }
    
}

/**/
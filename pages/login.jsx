import { supabase } from '@/lib/supabase';
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";


export default function LoginPage(){
    const router = useRouter();
    const [user,setUser] = useState()

    async function handleSubmit(event){
        
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if(!email){
            alert("Email is neded!")
        }
        if(!password){
            alert("Password cannot be empty")
        }
        else{
            if(password.length <= 6){
                alert("Password must be greather than 6 letters")
            }
        }
        

        if(email && password.length >=6){             
            const { user, session, error } = await supabase.auth.signIn({
                email: email,
                password: password,
            })
            if(user&&session){
                setUser(user)
            }
            else{
                alert(error)
            }
            
        }
        /**/
    }

    if(user){
        router.push('/')
        router.reload()
    }

    return(
        
        <div className="login-window">
            <Head>
            <title>Tornado | Login</title>
            <meta name="description" content="Managment app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="flex text-3xl text-black underline pb-4">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex mx-auto "><label htmlFor="email">Email: </label><input className="text-xl text-black items-black w-max outline outline-2" type='email' id='email' name='email'></input></div>
                <div className="flex mt-4"><label htmlFor="password">Password: </label><input className="text-xl w-max text-black items-black outline outline-2" type='password' id='password' name='password'></input></div>
                <div className="flex flex-row">
                <button className="flex mx-auto mt-2 bg-win_tile_bg border-4 p-2 border-t-win_tile_top border-l-win_tile_top border-r-win_tile_bottom border-b-win_tile_bottom hover:border-t-blue-500 hover:border-l-blue-500 hover:border-r-blue-900 hover:border-b-blue-900 hover:bg-blue-700" type='submit' name='login'>Log in</button>

                </div>
                
                
            </form>
        </div>
    )
}
import {supabase} from "@/lib/supabase";
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function SignUpPage(){
    const router = useRouter();
    const [key,setKey] = useState(true)
    const [data,setData] = useState({})
    const [keyMatch,setKeyMatch] =useState(false)

    //main loop
    
    async function handleKey(event){
        setKeyMatch(false)
        event.preventDefault();
        const key = event.target.key.value;

        if(key){
            const {data} = await supabase.from('keys').select('key,user_id').match({key: key})

            if(data[0].user_id){
                alert("Key is already in use! Enter valid key")
            }
            else{
                setKey(key)
                setData(data)
                goSign()
            }   
        }
        else{
            alert("Enter key")
        }
        
        
    

        /**/
    }
    async function handleSubmit(event){
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const nickname = event.target.nickname.value;

        if(!nickname){
            alert("Nickname is neded!")
        }
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
        if(nickname&&email && password.length >=6){
            const { user} = await supabase.auth.signUp({
                email: email,
                password: password,
            },
            {
                data:{
                    nickname: nickname,
                    avatar: 'https://ui-avatars.com/api/?name='+nickname
                }
            })
            
            
    
            await supabase
            .from('keys')
            .update({ user_id: user.id })
            .match({key: key})

            const {data,error} =await supabase
            .from('users')
            .insert([
                {user_id: user.id,avatar_url: 'https://ui-avatars.com/api/?name='+nickname,nickname: nickname}
            ])
            console.log(data,error)
            alert("Check your email")
            router.push("/")
            router.reload()

        }

        
    }

    function goSign(){
        if(data[0].key === key){
            setKeyMatch(true)
        }
        else{
            setKeyMatch(false)
        }
    }
    return(
        
        <div className="login-window">
            <Head>
            <title>Tornado | Signup</title>
            <meta name="description" content="Managment app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            {!keyMatch &&(
                <><h1 className="flex text-3xl text-black underline pb-4">Access key</h1>
                <form onSubmit={handleKey}>
                    <div className="flex mx-auto "><label htmlFor="key">Access key: </label><input className="text-xl text-black items-black w-max outline outline-2" type='key' id='key' name='key'></input></div>
                    <button className="flex mx-auto mt-2 bg-win_tile_bg border-4 p-2 border-t-win_tile_top border-l-win_tile_top border-r-win_tile_bottom border-b-win_tile_bottom hover:border-t-blue-500 hover:border-l-blue-500 hover:border-r-blue-900 hover:border-b-blue-900 hover:bg-blue-700" type='submit' name='signup'>Sign Up</button>             
                    
                </form></>
            ) }
            {keyMatch &&(
                <><h1 className="flex text-3xl text-black underline pb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                <div className="flex mx-auto ">
                    <label htmlFor="nickname">Nickname: </label><input className="text-xl text-black items-black w-max outline outline-2" type='text' id='nickname' name='nickname'></input></div>
                    <div className="flex mt-4 "><label htmlFor="email">Email: </label><input className="text-xl text-black items-black w-max outline outline-2" type='email' id='email' name='email'></input></div>
                    <div className="flex mt-4"><label htmlFor="password">Password: </label><input className="text-xl w-max text-black items-black outline outline-2" type='password' id='password' name='password'></input></div>
                    <div className="flex flex-row">
                    <button className="flex mx-auto mt-2 bg-win_tile_bg border-4 p-2 border-t-win_tile_top border-l-win_tile_top border-r-win_tile_bottom border-b-win_tile_bottom hover:border-t-blue-500 hover:border-l-blue-500 hover:border-r-blue-900 hover:border-b-blue-900 hover:bg-blue-700" type='submit' name='signup'>Sign Up</button>
                    </div>
                    
                    
                </form></>
            ) }
            
        </div>
    )
}
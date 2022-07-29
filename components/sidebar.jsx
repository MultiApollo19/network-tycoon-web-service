import { BsBug } from "react-icons/bs";
import { MdBuild,MdCached,MdLogin,MdLogout} from "react-icons/md";
import {VscSignIn} from "react-icons/vsc";
import Logo from "./iconset";
import Link from "next/link";
import Router from 'next/router'
import Image from "next/image";

import {signIn,signOut, useSession} from "next-auth/react";
import { useState,useEffect } from "react";

import { BASE_URL } from "../lib/constraints";


const SideBarIcon=({icon, text='tooltip 💡'})=>(
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default function SideBar(){
    const [userData,setUserData] = useState(null)
    const { data: session, status } = useSession()

    const fetchUserData = async () =>{
        const response = await fetch(`${BASE_URL}/api/prisma/user?email=${session.user.email}`)
        console.log(`${BASE_URL}/api/prisma/user?email=${session.user.email}`)
        const data = await response.json()
        setUserData(data)
    }

    
    if(session && status=='authenticated'&&!userData){
        fetchUserData()
    }

    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg dark:border-gray-900 dark:text-white z-10">
            <Link href="/"><a><SideBarIcon icon={<Logo size={12}/>} text='Homepage' /></a></Link>
            {!session && status=='unauthenticated' &&(
                <Link href="/api/auth/signin"><a onClick={e => {
                    e.preventDefault()
                    signIn('github')
                }}><SideBarIcon icon={<MdLogin size='26'/>}  text='Login'/></a></Link>
            ) }
            {session && status=='authenticated' && userData && (
                <><Link href="/api/auth/signout"><a onClick={e => {
                    e.preventDefault()
                    signOut('github')
                }}><SideBarIcon icon={<MdLogout size='24'/>}  text='Logout'/></a></Link>
                <Link href="/"><a onClick={e => {
                    e.preventDefault()                    
                }}><SideBarIcon icon={<Image src={userData.image} width={42} height={42} className='rounded-3xl'/>}  text="Profile"/></a></Link>
                </>
                
            )}
            
        </div>
    )
};


import { BsBug } from "react-icons/bs";
import { MdBuild,MdCached,MdLogin,MdLogout} from "react-icons/md";
import {FaUsers} from 'react-icons/fa'
import {VscSignIn} from "react-icons/vsc";
import Logo from "./iconset";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from 'react'



const SideBarIcon=({icon, text='tooltip 💡'})=>(
    <div className="sidebar-icon group">
        {icon}

        <div className="sidebar-tooltip group-hover:scale-100">
            {text}
        </div>
    </div>
);

export default function SideBar(){
    const router = useRouter()
    const [user,setUser] = useState('')

    useEffect(()=>{
        const user = supabase.auth.user()
        setUser(user)
    }    
    ,[])
    
    if(user){
        //console.log(user)
    }

    async function logOut(){
        await supabase.auth.signOut()
        router.reload()
    }

    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg dark:border-gray-900 dark:text-white z-10">
            <Link href="/"><a><SideBarIcon icon={<Logo size={12}/>} text='Homepage' /></a></Link>
            {!user&&(
                <>
                <Link href="/signup"><a><SideBarIcon icon={<VscSignIn size='24'/>}  text='Signup'/></a></Link>
                <Link href="/login"><a><SideBarIcon icon={<MdLogin size='26'/>}  text='Login'/></a></Link>
                </>
            )}
            {user&&(
                <>
                
                <Link href="/profile"><a><SideBarIcon icon={<Image src={user.user_metadata.avatar} width='50' height='50' className='avatar'/>}  text={user.user_metadata.nickname}/></a></Link>
                <Link href="/users"><a><SideBarIcon icon={<FaUsers size='24'/>}  text='User list'/></a></Link>
                <Link href="/"><a onClick={e => {logOut()}}><SideBarIcon icon={<MdLogout size='24'/>}  text='Logout'/></a></Link>
                </>
                
            )}            
            
                
            
        </div>
    )
};
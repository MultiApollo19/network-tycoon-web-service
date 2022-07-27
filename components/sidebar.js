import { BsBug } from "react-icons/bs";
import { MdBuild,MdCached,MdLogin,MdLogout} from "react-icons/md";
import {VscSignIn} from "react-icons/vsc";
import Logo from "./iconset";
import Link from "next/link";

import {signIn,signOut, useSession} from "next-auth/react";

const SideBar=()=>{
    const { data: session, status } = useSession()
    
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg dark:border-gray-900 dark:text-white z-10">
            <Link href="/"><a><SideBarIcon icon={<Logo size={12}/>} text='Homepage' /></a></Link>
            {!session && status=='unauthenticated' &&(
                <Link href="/api/auth/signin"><a onClick={e => {
                    e.preventDefault()
                    signIn('github')
                }}><SideBarIcon icon={<MdLogin size='26'/>}  text='Login'/></a></Link>
            ) }
            {session && status=='authenticated' && (
                <Link href="/api/auth/signout"><a onClick={e => {
                    e.preventDefault()
                    signOut('github')
                }}><SideBarIcon icon={<MdLogout size='24'/>}  text='Logout'/></a></Link>
            )}
            
        </div>
    )
};


const SideBarIcon=({icon, text='tooltip 💡'})=>(
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);
export default SideBar;
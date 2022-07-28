import {CgProfile} from "react-icons/cg"
import {MdOutlineSearch} from "react-icons/md"

import { useSession} from "next-auth/react";
import Image from "next/image";


const Header=()=>{
    const { data: session, status } = useSession()

    return(
        <div className="top-nav fixed flex h-12 flex-row bg-gray-700 w-screen dark:border-gray-900 dark:text-white z-0">
            <Search/>
            {!session && status=='unauthenticated' &&(
                <Avatar/>
            )}
            {session && status=='authenticated' && (            
            <Profile image={session.user.image} nickname={session.user.name}/>)}
        </div>
    );
}
const Search=()=>(
    <div className="top-nav-item">
        <MdOutlineSearch/>
    </div> 
);

const Profile=({image, nickname='Please Login'})=>(
    <div className="top-nav-item">
        
            <><Image src={image} width={32} height={32} alt='Avatar' className="rounded-xl"></Image>
            <span className="px-2">{nickname}</span></>
    </div>
)
const Avatar=()=>(
    <div className="top-nav-item">
        <CgProfile/>
        <span className="px-2">Please login</span>
        </div>)
export default Header;
import { BsBug } from "react-icons/bs";
import { MdBuild,MdCached,MdLogin,MdLogout} from "react-icons/md";
import {VscSignIn} from "react-icons/vsc";
import Logo from "./iconset";

const SideBar=()=>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg dark:border-gray-900 dark:text-white z-10">
            <SideBarIcon icon={<Logo size={12}/>} text='Homepage' />
            <SideBarIcon icon={<VscSignIn size='26'/>}  text='Sign Up'/>
            <SideBarIcon icon={<MdLogin size='26'/>}  text='Login'/>
            <SideBarIcon icon={<MdLogout size='24'/>}  text='Logout'/>
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
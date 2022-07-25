import { BsBug } from "react-icons/bs";
import { MdBuild,MdCached} from "react-icons/md";

const SideBar=()=>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg dark:border-gray-900 dark:text-white">
            <SideBarIcon icon={<BsBug size='28'/>} />
            <SideBarIcon icon={<MdBuild size='28'/>} />
            <SideBarIcon icon={<MdCached size='28'/>} />

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
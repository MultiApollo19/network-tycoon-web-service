import {CgProfile} from "react-icons/cg"
import {MdOutlineSearch} from "react-icons/md"

const Header=()=>{
    return(
        <div className="top-nav fixed flex h-12 flex-row bg-gray-700 w-screen dark:border-gray-900 dark:text-white z-0">
            <Search/>            
            <Avatar/>
        </div>
    );
}
const Search=()=>(
    <div className="top-nav-item">
        <MdOutlineSearch/>
    </div> 
);

const Avatar=()=>(
    <div className="top-nav-item">
        <CgProfile/>
        <Nickname/>
    </div>
    
);
const Nickname=()=>(
    <p className="mx-auto p-10">Nickname</p>
);
export default Header;
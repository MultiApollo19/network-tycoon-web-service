import {MdCopyright} from "react-icons/md"

const Header=()=>{
    console.log(process.env.GITHUB_SECRET);
    return(
        <div className="footer fixed flex h-12 flex-row bg-gray-700 w-screen dark:border-gray-900 dark:text-white bottom-0 z-0">
            <p> Resurrected Games <MdCopyright size={20}/>  2022</p>
        </div>
    );
}
export default Header;
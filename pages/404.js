import Link from "next/link";

const NotFound=()=>{
    return(
        <div className="not-found">
            <h1>Looks like this page does not exist :/</h1>
            <Link href='/'><a>Home Page</a></Link>
        </div>
    );
}
export default NotFound;
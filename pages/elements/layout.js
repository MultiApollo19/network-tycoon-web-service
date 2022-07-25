import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";
const Layout=({child})=>{
    return(
        <div className="content flex">
            <Header/>
            <SideBar/>
            {child}
            <Footer/>
        </div>
    );
}
export default Layout;
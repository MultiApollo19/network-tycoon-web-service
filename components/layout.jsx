import Footer from "./footer";
import SideBar from "./sidebar";
import Head
 from "next/head";
export default function Layout({ children }) {
    return (
      <>
      <div className="content">
        <SideBar />
        <main>{children}</main>
        <Footer />
      </div>
      </>
    )
  }
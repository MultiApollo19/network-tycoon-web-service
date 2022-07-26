import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";

export default function Layout({ children }) {
    return (
      <div className="content">
        <Header />
        <SideBar />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";

export default function Layout({ children }) {
    return (
      <div className="content">
<<<<<<< Updated upstream:components/layout.js
        <Header />
        <SideBar />
        <main>{children}</main>
=======
        <SideBar/>
        <main>
        {children}
        </main>
>>>>>>> Stashed changes:components/layout.jsx
        <Footer />
      </div>
    )
  }
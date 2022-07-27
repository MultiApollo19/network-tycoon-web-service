import {CgProfile} from "react-icons/cg"
import {MdOutlineSearch} from "react-icons/md"

import { useState, useEffect } from 'react'
import { supabase } from '../suprabase/clientApp'
import Auth from '../components/suprabase/auth'
import Account from '../components/suprabase/account'





const Header=()=>{
    const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
    return(
        <div className="top-nav fixed flex h-12 flex-row bg-gray-700 w-screen dark:border-gray-900 dark:text-white z-0">
            <Search/>
            <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>            
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
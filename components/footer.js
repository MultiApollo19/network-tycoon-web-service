import {MdCopyright} from "react-icons/md"
import { BsBug } from "react-icons/bs";
import { MdBuild,MdCached,MdLogin,MdLogout} from "react-icons/md";
import {VscSignIn} from "react-icons/vsc";
import Logo from "./iconset";
import Link from "next/link";
import { useState } from "react";


export default function Footer(){
    return(
        <div className="footer">
            <p className="text-black font-arcade"> Resurrected Games &copy; 2022</p>
        </div>
    );
};
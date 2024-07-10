import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    const [btn,setBtn]=useState("LOGIN");
    return (
        <div className="header">
            {/* logo */}
            <div className="logo">
                <img  src={LOGO_URL} />
            </div>

            {/*nav items*/}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className={btn} onClick={()=>{
                        if(btn=="LOGIN")
                        setBtn("LOGOUT")
                        else setBtn("LOGIN");
                        //console.log(btn);
                    }} >{btn}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;
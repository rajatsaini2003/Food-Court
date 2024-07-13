import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
const Header=()=>{
    const [btn,setBtn]=useState("LOGIN");

    // if no dependency array => useEffect is called on every render
    

    // if dependency array is empty => useEffect is called only once when component mounts
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[]);


    // if dependency array not empty => useEffect is called at first render and then only when any of the dependency changes
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[btn]);
    
    

    return (
        <div className="header">
            {/* logo */}
            <div className="logo">
                <img  src={LOGO_URL} />
            </div>

            {/*nav items*/}
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about"> About Us</Link></li>
                    <li> <Link to="/contactus"> Contact</Link></li>
                    <li> <Link to="/cart">Cart</Link></li>
                    <button className="btn" onClick={()=>{
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
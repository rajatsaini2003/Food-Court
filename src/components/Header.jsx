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
        <div className="flex justify-between items-center bg-pink-200 shadow-lg mb-2">
            {/* logo */}
            <div >
                <img className=" w-[100px] h-[100px] "
                 src={LOGO_URL} />
            </div>

            {/*nav items*/}
            <div className="nav-items">
                <ul className="flex p-4 m-4 gap-5">
                    <li className="cursor-pointer"> <Link to="/">Home</Link></li>
                    <li className="cursor-pointer"> <Link to="/about"> About Us</Link></li>
                    <li className="cursor-pointer"> <Link to="/contactus"> Contact</Link></li>
                    <li className="cursor-pointer"> <Link to="/cart">Cart</Link></li>
                    <button  onClick={()=>{
                        if(btn=="LOGIN")
                        setBtn("LOGOUT")
                        else setBtn("LOGIN");
                        //console.log(btn);
                    }} 
                    className=" w-[80px] border border-solid border-green-400 rounded-md bg-green-100"
                    >{btn}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;
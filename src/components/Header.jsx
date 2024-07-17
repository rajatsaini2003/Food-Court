import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import logo from "../assets/logo.png"
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
        <div className="flex sm:justify-between sm:flex-row flex-col items-center
         sm:items-center bg-yellow-100 shadow-lg mb-2 h-[fit-content] flex-wrap  ">
            {/* logo */}
            <div >
                <img className=" w-[100px] h-[100px] border border-black rounded-3xl "
                 src={logo}/>
            </div>

            {/*nav items*/}
            
                <ul className="nav-items  flex flex-row p-4 m-4 gap-5 flex-wrap justify-around ">
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
                    className=" w-[80px] h-[28px] border border-solid border-green-600 rounded-md bg-green-100"
                    >{btn}</button>
                </ul>
            
        </div>
    )
};
export default Header;
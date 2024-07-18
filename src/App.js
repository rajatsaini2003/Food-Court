import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx";
import {Footer} from "./components/Footer.jsx";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
// import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
//import RestaurantMenuPage from "./components/RestrauntMenuPage.jsx";
import OfflinePage from "./components/OfflinePage.jsx";
import useOnlineStatus from './utils/useOnlineStatus.jsx';
import Shimmer from "./components/Shimmer.jsx";
// chunking / code splitting /Dynamic Bundling
// Lazy loading / On demand loading / Dynamic import
const RestaurantMenuPage=lazy(()=>import("./components/RestrauntMenuPage.jsx"));
const About=lazy(()=>import("./components/About.jsx"));
import UserContext from "./utils/UserContext.jsx";


const AppLayout=()=>{
    const [userName,setUserName] =useState("");
    useEffect(()=>{
        const data={
            name:"Rajat Saini"
        };
        setUserName(data.name);
    },[])

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return(    
        <OfflinePage />
    )
    else
    return(
     <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <Header/>
            {/* here this outlet chooses children acc to the path */}
            <Outlet />
            <Footer/>
        </div>
        </UserContext.Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/> 
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contactus",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resid",
                element:<Suspense fallback={<Shimmer/>}>
                        <RestaurantMenuPage/>
                    </Suspense>
            }
        ],
        errorElement:<ErrorElement/>
    }
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
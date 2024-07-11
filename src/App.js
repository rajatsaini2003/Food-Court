import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx";
import {Footer} from "./components/Footer.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorElement/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contactus",
        element:<Contact/>
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
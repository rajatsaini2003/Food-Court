import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenuPage=()=>{
    const[resMenu,setResMenu]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu=async()=>{
        const response=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=509673&submitAction=ENTER");
        const data=await response.json();
        const finalData=data?.data?.cards[2]?.card?.card?.info
      
        console.log(data);
        setResMenu(data.data);
    }
    if(resMenu===null)
        <Shimmer/>
    else{
    const{name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;
    //continue from here

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
}
}
export default RestaurantMenuPage;
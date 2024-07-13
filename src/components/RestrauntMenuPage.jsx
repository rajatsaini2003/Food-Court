import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";
import DishCard from "./DishCard";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
const RestaurantMenuPage=()=>{
    const[resMenu,setResMenu]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    const params=useParams();
    //console.log(params?.resid);
    const fetchMenu=async()=>{
        const response=await fetch(RES_URL+params.resid);
        const data=await response.json();
        //const finalData=data?.data?.cards[2]?.card?.card?.info
      
        //console.log(data);
        setResMenu(data.data);
    }
    if(resMenu===null)
        <Shimmer/>
    else{
    const info=resMenu?.cards[2]?.card?.card?.info;
    
    console.log(info);
    const topPicks=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
    

    return(
        <div className="menu">
            <div className="res-head">
                <h1>{info?.name}</h1>
                <div className="res-div">
                    <h3>⭐{info?.avgRating} ({info?.totalRatingsString})</h3>
                    <h3>{info?.costForTwoMessage}</h3>
                </div>
                <div className="res-div">
                    <h3>OutLet: {info?.locality}</h3>
                    <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3128/3128841.png"/>
                    <h3> Deliver in {info?.sla.deliveryTime} min</h3>
                    </div>
                    <h3>{info?.cuisines.join(", ")}</h3>
                </div>
            </div>
            <h2>{topPicks.title}</h2>
            <div className="topPicks">
                {topPicks?.carousel?.map((cas)=>{
                   return(
                    <DishCard key={cas?.bannerId} {...cas?.dish?.info}/>
                   )
                })}
            </div>
        </div>
    )
}
}
export default RestaurantMenuPage;
import {useEffect, useState} from "react";
import Card from "./Card";
import { APIswiggy } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body=()=>{
    //Main list of restaurants
    const [res,setRes]=useState([]);
    // temporary list of restaurant to modify
    const [tempRes,setTempRes]=useState([]);


    useEffect(()=> {
        fetchData();
    },[]);


    //fetch data from API and set it to res and tempRes respectively
    const fetchData = async()=>{
        const data=await fetch(APIswiggy); 
        const jsonn=await data?.json();
        // in api they keep changing the position of the data so if it doesn't work check jsonn data
        //cards[3] or cards[4] or cards[2] contains the restaurant cards
        const finalData=jsonn?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        console.log(jsonn);
       setRes(finalData);
       setTempRes(finalData);
       
    };


    //sort the top restaurants based on rating in descending order
    const topRated=()=>{
        const newRes=tempRes.filter(
            (element)=>element.info.avgRating>=4.5
        )
        newRes.sort(function (a,b){return b.info.avgRating-a.info.avgRating});
        //we only update tempRes 
        setTempRes(newRes);
    }


    // search text and set search text
    const [srchTxt,setSrchTxt]=useState("");
    // we use this clog to confirm Reconciiliation
    //console.log("body");

    
    //search functionality
    const searchFunc=()=>{
        const filtRes=res.filter((rest)=>{
           return rest.info.name?.toLowerCase().includes(srchTxt.toLowerCase());
        });
        if(filtRes.length!=0)
        setTempRes(filtRes);
    else{
        alert("NO matching result found")
    }
       setSrchTxt("");
    }

    //rendering the restaurant list
    if(res.length==0){
        return (
            <div>
                <Shimmer />
            </div>
        )
     }
     else
        return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={srchTxt} onChange={(e)=>{setSrchTxt(e.target.value)}} className="searchBox"/>
                    <button type="submit" onClick={searchFunc} >Search</button>
                </div>
                <button className="filter-btn" onClick={topRated}>
                    Top Rated Restaurants
                </button>
                <button onClick={()=>{setTempRes(res)}}> Refresh</button>
            </div>
            <div className="body-res">
            {tempRes.map((restaurant)=>{
                return (
                    <Card key={restaurant.info.id} {...restaurant.info}/>
                )
            })}
            </div>
        </div>
    )
};
export default Body;
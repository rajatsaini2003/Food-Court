import {useEffect, useState} from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useGetResList from "../utils/useGetResList";
const Body=()=>{
    const [tempRes,setTempRes]=useState([]);
    // temporary list of restaurant to modify

    
    const res=useGetResList();
    //Main list of restaurants
    
    useEffect(()=> {
        setTempRes(res);
    },[res]);
    

    //sort the top restaurants based on rating in descending order
    const topRated=()=>{
        if(tempRes!==res){
            setTempRes(res);
        }
        else{
            const newRes=tempRes.filter(
                (element)=>element.info.avgRating>=4.5
            )
            newRes.sort(function (a,b){return b.info.avgRating-a.info.avgRating});
            //we only update tempRes 
            if(newRes.length!=0)
                setTempRes(newRes);
            else
            setTempRes(res);
        }
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
        alert("NO matching result found");
    }
       setSrchTxt("");
    }

    //console.log(res)
    //rendering the restaurant list
    if(res===undefined||res.length===0){
        return (
            <div>
                <Shimmer />
            </div>
        )
     }
     else
        return(
        <div className="body">
            <div className="filter flex"> 
                <div className="search m-3 p-3 ">
                    <input type="text" value={srchTxt} onChange={(e)=>{setSrchTxt(e.target.value)}} 
                    className="searchBox border border-solid border-black "
                    />
                    <button type="submit" onClick={searchFunc} 
                    className=" px-4 py-1 bg-green-100 m-4 rounded-md"
                    >Search</button>
                </div>
                <div className="m-3 p-3 flex items-center">                    
                    <button className="filter-btn px-4 py-1 bg-gray-100 rounded-md"
                     onClick={topRated}>
                        Top Rated Restaurants
                    </button>
                </div>      
            </div>
            <div className="body-res flex flex-wrap">
            {tempRes?.map((restaurant)=>{
                return (
                   <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} > <Card key={restaurant.info.id} {...restaurant.info}/> </Link>
                )
            })}
            </div>
        </div>
    )
};
export default Body;
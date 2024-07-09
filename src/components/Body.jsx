import {useEffect, useState} from "react";
import Card from "./Card";
import { APIswiggy } from "../utils/constants";


const Body=()=>{
    const [res,setRes]=useState([]);
    useEffect(()=> {
         fetchData();
    },[]);
    const fetchData = async()=>{
        const data=await fetch(APIswiggy); 
        const jsonn=await data.json();
       // console.log(jsonn);
       setRes(jsonn.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
        console.log(jsonn.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
    };
        return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const newRes=res.filter(
                        (element)=>element.info.avgRating>=4.2
                    )
                    setRes(newRes);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="body-res">
            {res.map((restaurant)=>{
                // key deni hai missing hai
                return (
                    <Card {...restaurant.info}/>
                )
            })}
            </div>
        </div>
    )
};
export default Body;
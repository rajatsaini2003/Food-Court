import {useState} from "react";
import Card from "./Card";
import restaurantList from "../utils/mockData";


const Body=()=>{
    const [res,setRes]=useState(restaurantList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const newRes=res.filter(
                        (element)=>element.data.avgRating>=4.2
                    )
                    setRes(newRes);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="body-res">
            {res.map((restaurant)=>{
                return (
                    <Card key={restaurant.data.id} {...restaurant.data}/>
                )
            })}
            </div>
        </div>
    )
};
export default Body;
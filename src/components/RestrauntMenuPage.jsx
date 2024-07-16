import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import {useParams} from "react-router-dom"
import { DeliveryLogo } from "../utils/constants";
import DishCard from "./DishCard";

const RestaurantMenuPage=()=>{
    const params=useParams();
    //console.log(params);
    const resMenu=useResMenu(params.resid);
    const info=resMenu?.cards[2]?.card?.card?.info;    
    //console.log(info);
    const topPicks=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(topPicks);
    return(
    resMenu===null?
        (<Shimmer/>):
        (
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
                        <img src={DeliveryLogo}/>
                        <h3> Deliver in {info?.sla.deliveryTime} min</h3>
                        </div>
                        <h3>{info?.cuisines.join(", ")}</h3>
                    </div>
                </div>
                <h1 className=' px-[10px] font-bold'>{topPicks.title}</h1>
                <div className="topPicks">
                    {topPicks.itemCards?
                        (topPicks?.itemCards?.map((cas)=>{
                            return(
                             <DishCard key={cas?.card?.info?.id} {...cas?.card?.info}/>
                        )
                        })):
                        ( topPicks?.carousel?.map((cas)=>{
                            return(
                             <DishCard key={cas?.bannerId} {...cas?.dish?.info}/>
                        )
                        }))
                    }    
                </div>
            </div>
        )
        
    );
    }  
export default RestaurantMenuPage;
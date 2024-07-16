import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import {useParams} from "react-router-dom"
import Type1 from "./Type1";
import Type2 from "./Type2"; 
const RestaurantMenuPage=()=>{
    const params=useParams();
    //console.log(params);
    const resMenu=useResMenu(params.resid);
    if(resMenu===null)
        <Shimmer/>
    else{
        //const info=resMenu?.cards[2]?.card?.card?.info;    
        const topPicks=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        if(topPicks.carousel===undefined) {
            return(
                <Type1 {...resMenu}/>
            )
        }
        else
            return(
                <Type2 {...resMenu}/>
        )
    }
}
export default RestaurantMenuPage;
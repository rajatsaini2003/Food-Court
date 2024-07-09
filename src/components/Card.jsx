import { CDN_URL } from "../utils/constants";
const Card=(props)=>{
    //  console.log(props);
    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        }
        return str.substring(0, num) + '...';
    }

    // Truncate cuisines and join into a string
    const truncatedCuisines = props.cuisines!=undefined? truncateString(props.cuisines.join(", "), 30):""; 
    const Time=props.sla!=undefined? props.sla.deliveryTime: "unknown";
    return(
        <div className="res-card" >
            <img src={CDN_URL+props.cloudinaryImageId}  />
            <h3>{props.name}</h3>
            <span><p>{props.avgRating}⭐</p>
            <p>{Time} Minutes</p></span>
            <p>{truncatedCuisines}</p>
            
        </div>
    )
}
export default Card;
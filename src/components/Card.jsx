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
    const truncatedCuisines = truncateString(props?.cuisines?.join(", "), 30); 
    const Time=props?.sla?.deliveryTime;

    const goToPage=()=>{
        
    }
    return(
        <div className="res-card" onClick={goToPage} >
            <img src={CDN_URL+props?.cloudinaryImageId}  />
            <h3>{props?.name}</h3>
            <span><p>{props?.avgRating}⭐</p>
            <p>Get in {Time} Minutes</p></span>
            <p>{truncatedCuisines}</p>
            
        </div>
    )
}
export default Card;
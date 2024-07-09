import { CDN_URL } from "../utils/constants";
const Card=(props)=>{
    // console.log(props);
    return(
        <div className="res-card" >
            <img src={CDN_URL+props.cloudinaryImageId} />
            <h3>{props.name}</h3>
            <span><p>{props.avgRating}⭐</p>
            <p>{props.deliveryTime} Minutes</p></span>
            <p>{props.cuisines.join(", ")}</p>
            
        </div>
    )
}
export default Card;
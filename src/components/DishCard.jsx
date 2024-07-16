import React from 'react'
import { CDN_URL } from '../utils/constants';

function DishCard(props) {
  console.log(props);
    const price = props.price===undefined ? props.defaultPrice:props.price;
  return (
    <div className='dishCard'>
        <img src={CDN_URL+props?.imageId}/>
        <h3>{props.name}</h3>
        <div className='addToCart'>
            <p>₹ {price/100}</p>
            <button>Buy</button>
        </div>
        <p>Is Veg: {props.isVeg==true?"🟢":"🔴"}</p>
        <p>{props?.description}</p>
    </div>
  )
}

export default DishCard;

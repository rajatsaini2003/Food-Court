import React from 'react'
import { CDN_URL ,Unavail_URL } from '../utils/constants';

function DishCard(props) {
  //console.log(props);
  const img=props?.imageId?CDN_URL+props?.imageId:Unavail_URL
    const price = props.price===undefined ? props.defaultPrice:props.price;
  return (
    <div className='dishCard  shadow-lg bg-gray-200'>
        <img src={img}/>
        <h3 className='font-semibold'>{props.name}</h3>
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

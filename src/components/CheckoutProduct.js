import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import {addToBasket,removeFromBasket} from '../slices/basketSlice'
import { useDispatch } from "react-redux";
const CheckoutProduct = ({id,title,image,description,category,price}) => {
    const [rating]=useState( Math.floor (Math.random()*(5-1+1))+1);
    const Dispatch=useDispatch();
    const additemtobasket=()=>{
        const product={
            id,
            title,
            image,
            description,
            category,
            price
        }
        Dispatch(addToBasket(product))
    }
    const  removeitemfrombasket=()=>{
        console.log("ID::+"+id)
        Dispatch(removeFromBasket({ id }))

    }
    return (
        <div className="flex flex-col  md:grid md:grid-cols-5 pb-2 border-b-4">
                <Image
                src={image}
                width={200}
                height={200}
                objectFit="contain"/>
                <div className="col-span-3 mx-5">
                    <p>{title}</p>
                    <div className="flex">
                {Array(rating).
                    fill().
                    map((_, i) => (
                        <StarIcon key={i}className="h-5 text-yellow-400" />
                      
                   ))}
                    </div>
                    <p className="text-sm my-2 line-clamp-3">
                        {description}
                    </p>
                    <Currency quantity={price} currency="PKR" />
                
                </div>
                <div className="flex flex-col space-y-2 w-full m-auto justify-self-end"> 
                <div className="button w-full mt-auto active:outline-0" onClick={additemtobasket}>Add To Basket</div>
                <div className="button mt-auto active:outline-0" onClick={removeitemfrombasket}>Remove from Basket</div>
                </div>
         
        </div>
        
    )
}

export default CheckoutProduct

import Image from "next/image";
import Currency from 'react-currency-formatter'
import {StarIcon} from "@heroicons/react/solid"
import {useState} from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const UniqueID=nextId();
function Product({id,title,image,description,category,price}) {
    const [rating]= useState( Math.floor (Math.random()*(5-1+1))+1);
    const dispatch=useDispatch();
    const AdditemtoBasket =()=>{
        const product={
            id,
            title,
            image,
            description,
            category,
            price
        }   
        dispatch(addToBasket(product));
    }    
    return (
        <div className="relative flex flex-col my-2 mx-2 bg-white px-4 py-8">
            <p className="text-gray-400 absolute top-2 right-2">{category}</p>
            <Image src={image} alt="" width={200} height={200} objectFit="contain" />
            <p className="font-semibold line-clamp-1">{title}</p>
            { <div className="flex">
                {Array(rating).
                    fill().
                    map((_, i) => (
                        <StarIcon key={i}className="h-5 text-yellow-400" />
                      
                   ))}
                   
            </div> }
            <p className="line-clamp-2">{description}</p>
            <div className="font-semibold"><Currency quantity={price} currency="PKR" /></div>
            <p onClick={AdditemtoBasket} className="button flex justify-center">Add To  Basket</p>
        </div>
    )
}

export default Product;
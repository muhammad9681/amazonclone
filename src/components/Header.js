import Image from "next/image"
import { SearchIcon,ShoppingBagIcon,MenuIcon } from "@heroicons/react/solid";
import {signIn,signOut,useSession} from 'next-auth/react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
    const {data:session, status}=useSession();
    const router=useRouter();
    const items=useSelector(selectItems)
    return (
        <header>
 <div className="flex p-1 flex-grow bg-amazon_blue">
            <div className="flex mt-2 items-center flex-grow sm:flex-grow-0"
            onClick={()=>router.push('/')}>
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer" 
                        />
            </div>
                <div className="hidden sm:flex items-center rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 my-2">
                    <input type='text' className="flex-grow text-md h-full my-2 w-6 focus:outline-none rounded-l-md px-3"/>
                    <SearchIcon className="text-white h-10 p-2 cursor-pointer"/>
                </div>
            
                <div className="flex text-white space-x-3 items-center mx-2 text-xs md:text-sm">
                    <div onClick={!session ? signIn: signOut} className="link white_border flex flex-col">
                        <p>{ session ? `Hello,${session.user.name}` :"SignIn" }</p>
                        <p className="font-bold">Account & Lists</p>                   
                    </div>
                    <div className="link white_border flex flex-col">
                        <p>Returns</p>
                        <p className="font-bold">& Orders</p>
                    </div>
                    <div className="link relative flex flex-col items-center white_border"
                    onClick={()=>router.push('/checkout')}>
                        <ShoppingBagIcon className="h-10"/>
                        <p className="absolute top-0 right-10 bg-yellow-400 rounded-lg">
                            {items.length}
                            </p>
                        <p className="font-bold">Basket</p>
                    </div>
                </div>
        </div>
        <div className="flex text-white bg-amazon_blue-light px-2 py-0.5 space-x-4 text-sm items-center	">
            <div className="link flex space-x-1 justify-center items-center">
                <MenuIcon className="h-7"/>
                <p>All</p>
             
            </div>
            <p className="link hidden sm:inline-flex">Prime Video</p>
            <p className="link hidden sm:inline-flex">Amazon Business</p>
            <p className="link hidden sm:inline-flex">Deals Today</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
        </header>
    )
}

export default Header

import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, total } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/react";
const checkout = () => {
    const iteminBasket=useSelector(selectItems)
    const totalPrice=useSelector(total);
    const {data:session, status}=useSession();
    return (
      
        <div className="bg-gray-100">
              <Header/>
          <main className="lg:flex lg:max-w-screen-xl mx-auto">
            <div className="flex-row m-4 shadow-sm w-3/4">
                    <Image
                    src={'https:links.papareact.com/ikj'}
                    width={1020}
                    height={250}
                    objectFit="contain"/>
                <div className="flex flex-col p-5 space-y-10 bg-white">
                <h1 className="text-3xl border-b pb-4">
                {iteminBasket.length === 0 ? "Yours Basket is empty." : "Shoping Basket"}
                </h1>
                {iteminBasket.map((item,i)=>(
                    <CheckoutProduct 
                    key={i}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    category={item.description}
                    price={item.price}
                     />
                ))}
            </div>
            </div>
       {/* {Right Side is here.... */}
         <div className="flex flex-grow flex-col p-10 shadow-md w-1/4">
            {iteminBasket.length > 0 && 
             <div>
                 <h2>Subtotal ({iteminBasket.length} items)
                 <span className="font-bold"><Currency quantity={totalPrice} currency="PKR"/></span>
                 </h2>  
                 <button className={` flex-grow button px-4 p-2 mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-300 text-gray-200'}`} disabled={!session}>
             {!session ? 'Sign In to Proceed Checkout' : 'Proceed Checkout'}
         </button>
             </div>
             
                 }
       
         </div>
        
          </main>

        </div>
    )
}

export default checkout

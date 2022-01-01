import Image from "next/image"
import Product from "./Product"
function ProductFeed({products}) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 relative mx-auto z-20 md:-mt-60">
            {
                products.slice(0,4).map((product)=>(
                    <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    category={product.category}/>
                ))
            }
     
     <img className="md:col-span-full px-2" 
     src={"https://links.papareact.com/dyz"} alt=""/>
        <div className="md:col-span-2">
        {
                products.slice(4,5).map((product)=>(
                    <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    category={product.category}/>
                ))
            }
        </div>
           {
                products.slice(6,products.length).map((product)=>(
                    <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    category={product.category}/>
                ))
            }
        </div>
        
    )
}

export default ProductFeed


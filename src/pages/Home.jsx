import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/features/Cart';


export default function Home() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const handleaddtocart = (item) => {
        const productToAdd = {
            id:item.id,
            name: item.title,
            price: item.price,
            image: item.image,
            quantity: 1,
        }
        dispatch(addToCart(productToAdd))
    }

    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {
                products.map((item) => {
                    return (
                        <div className="relative w-full" key={item.id}>
                            <div className="w-full border border-lightgrey relative">
                                {/* Product Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-36 md:h-44 2xl:h-56 object-cover"
                                />
                                {/* Add to cart button*/}
                                <button
                                    onClick={() => handleaddtocart(item)}
                                    className="bg-black w-full text-white text-center py-1 font-semibold cursor-pointer"
                                >
                                    Add To Cart
                                </button>
                            </div>
                            <div className="my-3 max-w-44">
                                <h3 className="truncate">{item.title}</h3>
                                <p className="text-reddish">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>)
}

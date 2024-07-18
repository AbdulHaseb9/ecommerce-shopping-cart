import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../app/features/Cart';

export default function ShoppingCart() {

    const dispatch = useDispatch()

    const cartProducts = useSelector((state) => state.cart.products)

    const increaseQuantity = (item) => {
        dispatch(increaseItemQuantity({ id: item.id }))
    }

    const decreaseQuantity = (id) => {
        dispatch(decreaseItemQuantity({ id }))
    }

    return (
        <div>
            {
                cartProducts.length == 0 ? <div className='text-center text-3xl font-semibold'>nothing in cart</div> :
                    cartProducts.map((item, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_5px] border border-lightgrey grid grid-cols-4 place-items-center font-semibold my-5"
                                >
                                    <div className="md:flex items-center">
                                        <img src={item.image} alt={item.name} className="max-h-20" />
                                        <figcaption className="text-center truncate w-16 md:w-40">
                                            {item.name}
                                        </figcaption>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-sm">PKR {item.price}</h4>
                                    </div>
                                    <div className="flex flex-col items-center md:flex-row">
                                        <span className="text-xl mx-2 p-1 cursor-pointer"
                                            onClick={() => decreaseQuantity(item.id)}>-</span>
                                        <input
                                            type="text"
                                            className="w-7 text-center"
                                            placeholder="1"
                                            value={item.quantity}
                                            disabled
                                            max={20}
                                            min={1}
                                        />
                                        <span className="text-xl mx-2 p-1 cursor-pointer" onClick={() => increaseQuantity(item)}>+</span>
                                    </div>
                                    <div>
                                        <h4>{item.price * item.quantity}</h4>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <FaRegTrashCan className="mr-8"
                                        onClick={()=>dispatch(removeFromCart(item))} />
                                    </div>
                                </div>
                            </>
                        )
                    })

            }
        </div >
    )
}


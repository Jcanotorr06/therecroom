import {Link} from 'react-router-dom'

const Cart = ({cart, useCart}) => {
    const isEmpty = !Object.keys(cart.line_items).length
    const EmptyCart = () =>(
        <div className="my-10 w-screen px-8 text-center">
            <h1 className="text-xl font-code text-gray-400 font-bold my-10">You have no items in your cart</h1>
        </div>
    )

    const RegularCart = () =>(
        <div className="my-10 w-screen flex justify-center">
            <div className="container">
                {
                    cart.line_items.map(item => (
                        <div className="flex flex-col justify-center px-4 md:px-40 lg:px-60 xl:px-72" key={item.id}>
                            <hr className="border-dashed my-4 border-2"/>
                                <div className="flex grid grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                                    <Link to={`/record/${item.product_id}`} className="">
                                        <img src={item.media.source} alt="" />  
                                    </Link>
                                    <div className="flex col-span-2 grid grid-rows-4 lg:col-span-3 xl:col-span-5">
                                        <div className="flex grid grid-cols-3">
                                            <Link to={`/record/${item.product_id}`} className="col-span-2">
                                                <h1 className="font-body font-bold">{item.name}</h1>
                                            </Link>
                                            <div className="flex justify-end">
                                                <button className="mx-2" onClick={() => useCart.removeFromCart(item.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <h1 className="font-body text-sm ">{item.is_valid ? 'In Stock' : 'Out Of Stock'}</h1>
                                        <div className="flex grid grid-cols-3">
                                            <h1 className="font-body col-span-2">{item.quantity} x {item.price.formatted_with_symbol}</h1>
                                            <div className="flex justify-end">
                                                <button className="mx-2" onClick={() => useCart.updateCartQty(item.id, item.quantity - 1)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 border p-1 border-black hover:bg-black hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <button className="mx-2" onClick={() => useCart.updateCartQty(item.id, item.quantity + 1)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 border p-1 border-black hover:bg-black hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))
                }
                <div className="my-4">
                    <div className="px-4 md:px-40 lg:px-60 xl:px-72">
                        <hr className="border-dashed border-2"/>
                    </div>
                </div>
                <div className="my-4 text-center">
                    <h1 className="font-code text-xl">Sub-Total {cart.subtotal.formatted_with_symbol}</h1>
                </div>
                <div className="w-full my-4 px-4 md:px-40 lg:px-60 xl:px-72">
                    <Link to="/checkout">
                        <button className="w-full bg-black text-white font-code px-8 py-4 rounded-full hover:bg-opacity-80">CHECKOUT</button>
                    </Link>
                </div>
                <div className="w-full my-4 px-4 md:px-40 lg:px-60 xl:px-72">
                    <button className="w-full bg-red-500 text-white font-code px-8 py-4 rounded-full hover:bg-red-400" onClick={() => useCart.emptyCart()}>EMPTY CART</button>
                </div>
            </div>
        </div>
    )
    return (
        <div className="flex flex-col xl:min-h-screen w-screen">
            <div className="mt-28 lg:mt-40 z-10">
                <h1 className="font-code text-gray-800 select-none text-3xl text-center mt-10 lg:mt-20 lg:text-5xl">YOUR CART</h1>
                {isEmpty ? 
                    <EmptyCart/>
                :
                    <RegularCart/>
                }
            </div>
        </div>
    )
}

export default Cart

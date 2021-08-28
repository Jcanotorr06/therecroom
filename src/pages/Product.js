import React from 'react'
import {useParams, Link} from  'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Product = ({products, onAddToCart}) => {
    const {id} = useParams()
    const product = products.filter(pr  =>{
        return pr.id === id;
    })[0]

    return (
        <div className="flex flex-col min-h-screen w-screen">
            <div className="mt-28 lg:mt-40 z-10">
            </div>
            <div className="flex w-full justify-center items-center p-8 xl:py-32 xl:px-80 xl:justify-start bg-gray-100 relative">
                <img className="mw-64 xl:mw-32 shadow-custom transform xl:hover:scale-125 transition  " src={product.media.source} alt="" />
                <div className="absolute hidden top-0 right-60 p-6 w-100 h-3/4 bg-white xl:block">
                    <Link to={`/artist/${product.categories[1].slug}`} className="my-2">
                        <h1 className="font-code text-sm tracking-wide hover:underline">{product.categories[1].name}</h1>
                    </Link>
                    <h1 className="font-code text-2xl mt-3">{product.name}</h1>
                    <h1 className="font-code text-xl font-bold mt-12">{product.price.formatted_with_symbol}</h1>
                    <h1 className="font code text-xs mt-1 tracking-widest">Free International Shipping</h1>
                    <button className="bg-black text-white font-code text-xl rounded-full py-3 px-10 mt-6 transition-colors hover:bg-gray-200 hover:text-black" onClick={() => onAddToCart(product.id, 1)}>Add to basket</button>
                    <hr className="w-full border-black my-8"/>
                    <h1 className="font-code text-xs mt-1 tracking-widest">Left in Stock: {product.inventory.available}</h1>
                    <h1 className="font-code text-xs mt-1 tracking-widest">Product Id: {product.id}</h1>
                    
                </div>
            </div>
            <div className="my-10 flex justify-center xl:hidden">
                <div className="container text-center">
                    <Link to={`/artist/${product.categories[1].slug}`}>
                        <h1 className="font-code text-sm tracking-wide hover:underline">{product.categories[1].name}</h1>
                    </Link>
                    <h1 className="font-code text-3xl mt-3">{product.name}</h1>
                    <h1 className="font-code text-xl font-bold">{product.price.formatted_with_symbol}</h1>
                    <h1 className="font code text-xs mt-1 tracking-widest">Free International Shipping</h1>
                    <button className="bg-black text-white font-code text-xl rounded-full py-3 px-10 mt-6 transition-colors hover:bg-gray-200 hover:text-black" onClick={() => onAddToCart(product.id, 1)}>Add to basket</button>
                    <hr className="w-full border-black my-8"/>
                    <h1 className="font-code text-xs mt-1 tracking-widest">Left in Stock: {product.inventory.available}</h1>
                    <h1 className="font-code text-xs mt-1 tracking-widest">Product Id: {product.id}</h1>
                </div>
            </div>
            <div className="my-10 flex justify-center">
                <div className="container text-center px-5">
                    <h1 className="text-2xl font-code">About this Record</h1>
                    <p className="text-md font-body my-6">{ReactHtmlParser(product.description)}</p>
                </div>
            </div>
            <div className="my-10 text-center flex flex-col items-center justify-center">
            <h1 className="text-2xl font-code mb-6">More By This Artist</h1>
                <div className="flex container flex-col items-center justify-center mx-4">
                    <Carousel infiniteLoop={true} showStatus={false} autoPlay={true} showIndicators={false} showThumbs={false} className="px-8 border-left border-right">
                        {product.related_products.map(related_product => (
                            <Link to={`/record/${related_product.id}`} key={related_product.id}>
                                <div className="relative">
                                    <img src={related_product.media.source} className="select-none mw-64" alt="" />
                                    <h1 className="font-code text-xl hover:underline">{related_product.name}</h1>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Product

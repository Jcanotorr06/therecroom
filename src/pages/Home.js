import {ProductGrid} from '../components'
import {Link} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';

const Home = ({products, newReleases, bestSellers, onAddToCart}) => {
    const d = new Date()
    const k = Object.keys(products)
    let productOfTheDay
    if(d.getDate() >= k.length){
        productOfTheDay = products[d.getDate() - k.length]
    }
    else{
        productOfTheDay = products[d.getDate()]
    }
    return (
        <div className="flex flex-col min-h-screen">
            <img src="/ripped.jpg" className="absolute z-0 w-full" alt="" />
            <div className=" mt-28 lg:mt-40 z-10">
                <Link to={{
                    pathname: "/new-releases",
                    state: {
                        title: "NEW RELEASES"
                    }
                }}>
                    <h1 className="font-code text-gray-800 select-none text-3xl text-center mt-10 lg:mt-20 lg:text-5xl hover:underline">NEW RELEASES</h1>
                </Link>
                <ProductGrid products={newReleases.slice(-12).reverse()}/>
            </div>

            <div className="my-4 w-full p-4 bg-black">
                <h1 className="text-center select-none text-sm text-white font-bold font-code lg:text-lg">FREE 24 HOURS WORLDWIDE SHIPPING</h1>
            </div>

            <div className="my-12 w-full">
                <h1 className="font-code select-none text-gray-800 text-3xl text-center lg:text-5xl">ALBUM OF THE DAY</h1>
                <div className="container mx-auto items-start flex px-5 py-12 lg:flex-row flex-col ">
                <div className=" flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto ">
                    <Link to={{
                        pathname: `/record/${productOfTheDay.id}`,
                        state: {
                            product: productOfTheDay
                        }
                    }}>
                    <span>
                        <img className="object-cover object-center rounded transition duration-300 hover:opacity-75" src={productOfTheDay.media.source} alt="" />
                    </span>
                    </Link>
                </div>
                <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left lg:px-2 items-center text-center">
                    <Link to={{
                        pathname: `/artist/${productOfTheDay.categories[1].slug}`,
                        state: {
                            title: productOfTheDay.categories[1].name
                        }
                    }}>
                    <span>
                        <h1 className="font-code sm:text-2xl text-4xl mb-1 hover:underline">
                        {productOfTheDay.categories[1].name}
                        </h1>
                    </span>
                    </Link>
                    <Link to={{
                        pathname: `/record/${productOfTheDay.id}`,
                        state: {
                            product: productOfTheDay
                        }
                    }}>
                    <span>
                        <h1 className="font-body text-4xl mb-6 hover:underline">
                            {productOfTheDay.name}
                        </h1>
                    </span>
                    </Link>
                    <h1 className="font-body text-xl leading-loose">{ReactHtmlParser(productOfTheDay.description)}</h1>
                    <span>
                        <button className="bg-black text-white font-code text-2xl rounded-full py-4 px-12 mt-10 transition-colors hover:bg-gray-200 hover:text-black"  onClick={() => onAddToCart(productOfTheDay.id, 1)}>Add to basket</button>
                    </span>
                </div>
                </div>
            </div>

            <div className="w-full my-12 bg-gray-100">
                <div className="container flex px-10 py-16 mx-auto h-full items-center grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1">
                <div className="p-2">
                    <h1 className="font-code text-center lg:text-justify text-xl select-none">SIGN UP TO OUR NEWSLETTER FOR 10% OFF YOUR FIRST PURCHASE</h1>
                </div>
                <div className="p-2">
                    <input type="text" placeholder="Enter Email" className="border border-black p-3 font-code placeholder-gray-400 w-full" />
                </div>
                <div className="p-2 text-center lg:text-left">
                    <button className="bg-black text-white font-code text-xl rounded-full py-3 px-10 transition-colors hover:bg-gray-200 hover:text-black">Subscribe</button>
                </div>
                </div>
            </div>

            <div className="my-4">
                <Link to={{
                    pathname: "/best-selling",
                    state: {
                        title: "BEST SELLING"
                    }
                }}>
                    <h1 className="font-code text-gray-800 select-none text-3xl text-center mt-10 lg:mt-20 lg:text-5xl hover:underline">BEST SELLERS</h1>
                </Link>
                <ProductGrid products={bestSellers.slice(-12).reverse()}/>
            </div>

        </div>
    )
}

export default Home

import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
    return (
        <div className="my-2 xl:my-10">
            <div className="relative  shadow-xl flex justify-center align-middle place-content-center w-44 md:w-56 lg:w-64 xl:w-80 ">
                <div className="w-full">
                    <Link to={{
                        pathname: `/record/${product.id}`,
                        state: {
                            product
                        }
                    }} className="w-1/2">
                            <img src={product.media.source} className="w-full transition duration-300 hover:opacity-75" alt="" /> 
                    </Link>      
                </div>
                <div className="absolute left-0 bottom-0 bg-black z-10 transform -translate-y-8 rounded-r-full">
                    <Link to={{
                        pathname: `/artist/${product.categories[1].slug}`,
                        state: {
                            title: product.categories[1].name
                        }
                    }}>
                            <p className="text-white text-xs font-code py-2 pl-2 pr-4 lg:pr-8 lg:text-base hover:underline">{product.categories[1].name}</p>
                    </Link>
                </div>
            </div>
            <div className="w-44 py-1 md:w-56 lg:w-64 xl:w-80 border-0">
                <Link to={{
                        pathname: `/record/${product.id}`,
                        state: {
                            product
                        }
                    }}>
                        <h1 className="text-body font-bold text-lg lg:text-2xl hover:underline">{product.name}</h1>
                </Link>
                <h5 className="text-body select-none font-bold text-sm text-gray-400 lg:text-base">{product.price.formatted_with_symbol}</h5>
            </div>
        </div>
    )
}

export default ProductCard

import ProductCard from './ProductCard';

const ProductGrid = ({products}) => {
    return (
        <div className="px-1 py-4 flex grid grid-cols-1 gap-1 lg:p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {
                products.map(product => (
                    <div key={product.id} className="flex place-content-center">
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductGrid

import {useParams, useLocation} from  'react-router-dom'
import {ProductGrid} from '../components'

const Genre = ({products, categories}) => {
    const location = useLocation()
    let {genre} = useParams()

    if(location.pathname === '/new-releases'){
        genre = 'new-release'
    }else if(location.pathname === '/best-selling'){
        genre = 'best-seller'
    }else if(location.pathname === '/upcomming'){
        genre = 'upcomming'
    }
    const genreProducts = products.filter(pr => (
        pr.categories.find(x => (
            x.slug === genre
        ))
    ))
    const category = categories.filter(cat =>(
        cat.slug === genre
    ))[0]

    return (
        <div className="flex flex-col min-h-screen w-screen">
            <img src="/ripped.jpg" className="absolute z-0 w-full" alt="" />
            <div className="mt-28 lg:mt-40 z-10">
                <h1 className="font-code text-gray-800 select-none text-3xl text-center mt-10 lg:mt-20 lg:text-5xl">{category.name.toUpperCase()}</h1>
                {category.description ?
                    <div className="flex justify-center mt-10">
                        <div className="container font-body py-4 px-16 text-sm text-justify bg-gray-200 bg-opacity-30 border-left border-l-8 border-black">
                            {category.description}
                        </div>
                    </div> 
                : ''
                }
                <ProductGrid products={genreProducts.reverse()}/>
            </div>
        </div>
    )
}

export default Genre

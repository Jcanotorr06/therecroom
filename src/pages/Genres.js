import {Link} from "react-router-dom"

const Genres = ({categories}) => {
    const genres = categories.slice(-17).reverse()
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <img src="/ripped.jpg" className="absolute z-0 w-full" alt="" />
            <div className="mt-28 lg:mt-40 z-10">
                <h1 className="font-code text-gray-800 select-none text-3xl text-center mt-10 lg:mt-20 lg:text-5xl">MUSIC GENRES</h1>
                <div className="my-10 px-10 flex grid grid-cols-1 gap-8 lg:p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {genres.map(genre =>(
                        <Link to={{
                            pathname: `/genres/${genre.slug}`,
                            state: {
                                title: genre.name,
                                description: genre.description
                            }
                        }} key={genre.id}>
                            <div className="relative">
                                <img src={genre.assets[0].url} alt="" className="select-none" />
                                <div className="w-full bg-black h-full text-center lg:flex items-center justify-center opacity-0 transition hidden absolute transfrom top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:opacity-75 ">
                                    <h1 className="font-bold font-code text-xl text-white opacity-100 select-none">{genre.name}</h1>
                                </div>
                                <h1 className="text-center text-xl font-code lg:hidden hover:underline">{genre.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Genres

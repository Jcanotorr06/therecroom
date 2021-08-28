import {useLocation} from  'react-router-dom'
import {ProductGrid} from '../components'
import {useState, useEffect} from 'react'


const Search = ({products}) => {
    const [sort, setSort] = useState('RECORDS A-Z')
    const [results, setResults] = useState([])
    const location = useLocation()
    const query = location.search.slice(3).toLowerCase()
    
    useEffect(() => {
        setResults(products.filter(pr => (
            Object.keys(
                pr.categories[1].name.toLowerCase().split(" ").filter(x => (
                    x === query
                ))
            ).length
            ||
            Object.keys(
                pr.name.toLowerCase().split(" ").filter(x => (
                    x === query
                ))
            ).length
        )).sort((a, b) => (a.name > b.name) ? 1 : -1))
    }, [products, query])

    const handleSort = (e) =>{
        if(e.target.value === 'RECORDS A-Z'){
            setResults(results.sort((a, b) => (a.name > b.name) ? 1 : -1))
        }else if(e.target.value === 'RECORDS Z-A'){
            setResults(results.sort((a, b) => (a.name < b.name) ? 1 : -1))
        }else if(e.target.value === 'ARTIST A-Z'){
            setResults(results.sort((a,b) => (a.categories[1].name > b.categories[1].name) ? 1 : -1))
        }else if(e.target.value === 'ARTIST Z-A'){
            setResults(results.sort((a,b) => (a.categories[1].name < b.categories[1].name) ? 1 : -1))
        }else if(e.target.value === 'OLDEST FIRST'){
            setResults(results.sort((a,b) => (a.created > b.created) ? 1 : -1))
        }else if(e.target.value === 'NEWEST FIRST'){
            setResults(results.sort((a,b) => (a.created < b.created) ? 1 : -1))
        }else if(e.target.value === 'PRICE LOW TO HIGH'){
            setResults(results.sort((a,b) => (a.price.raw > b.price.raw) ? 1 : -1))
        }else if(e.target.value === 'PRICE HIGH TO LOW'){
            setResults(results.sort((a,b) => (a.price.raw < b.price.raw) ? 1 : -1))
        }
        setSort(e.target.value)
    }

    return (
        <div className="flex flex-col min-h-screen w-screen">
        <img src="/ripped.jpg" className="absolute z-0 w-full" alt="" />
        <div className="mt-28 lg:mt-40 z-10">
            <h1 className="mx-2 xl:mx-20 font-code text-gray-800 select-none text-3xl text-left mt-10 lg:mt-20 lg:text-3xl">Your search for <b>{location.search.slice(3)}</b> found {Object.keys(results).length} results:</h1>
            <div className="my-10 flex justify-end px-20 md:px-8 lg:px-28">
                <select value={sort} onChange={e => handleSort(e)} defaultValue="RECORDS A-Z" className="border border-black p-2 pr-12 font-code focuse:outline-none">
                    <option value="RECORDS A-Z" key="1">RECORDS A-Z</option>
                    <option value="RECORDS Z-A" key="2">RECORDS Z-A</option>
                    <option value="ARTIST A-Z" key="3">ARTIST A-Z</option>
                    <option value="ARTIST Z-A" key="4">ARTIST Z-A</option>
                    <option value="OLDEST FIRST" key="5">OLDEST FIRST</option>
                    <option value="NEWEST FIRST" key="6">NEWEST FIRST</option>
                    <option value="PRICE LOW TO HIGH" key="7">PRICE LOW TO HIGH</option>
                    <option value="PRICE HIGH TO LOW" key="8">PRICE HIGH TO LOW</option>
                </select>
            </div>
            <ProductGrid products={results}/>
        </div>
        </div>
    )
}

export default Search

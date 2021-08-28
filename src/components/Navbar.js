import {NavLink as Link, useHistory} from 'react-router-dom'
import {Menu, Transition} from '@headlessui/react'
import {useState, Fragment} from 'react'

const Navbar = ({totalItems}) => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')
    const history = useHistory()
    if(false){
        console.log(menuIsActive)
        setMenuIsActive(false)
    }
    const submit = e => {
        history.push(`/search?q=${searchQuery}`)
        e.preventDefault()
        setSearchQuery('')
    }
    return (
        <>
            <div className="flex flex-col bg-white fixed w-full z-50 lg:hidden">
                <div className="flex justify-between grid-cols-2 px-4 pt-4 border-b border-black">
                    <div className="w-10">
                        <Link to="/">
                                <img src="/logo.png" alt="The Rec-Room Logo"/>
                        </Link>
                    </div>
                    <div className="flex">
                        <div className="px-2">
                            <Link to="/cart">
                                    <button className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <span className="font-code text-xs absolute -translate-x-1/2 -translate-y-1/4 top-1/2 left-1/2">
                                            {totalItems}
                                        </span>
                                    </button>
                            </Link>
                        </div>
                        <Menu>
                            <div className="px-2">
                                <Menu.Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-56 mt-10 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="p-1">
                                        <Menu.Item>
                                            {({menuIsActive}) =>(
                                                <div className="flex flex-col py-2">
                                                    <Link to="/" exact activeClassName="font-bold">
                                                        <p className="py-2 pl-2 font-code transition">Home</p>
                                                    </Link>
                                                    <Link to="/genres" activeClassName="font-bold">
                                                        <p className="py-2 pl-2 font-code  transition">Genres</p>
                                                    </Link>
                                                    <Link to={{
                                                        pathname: "/new-releases",
                                                        state: {
                                                            title: "NEW RELEASES"
                                                        }
                                                    }} activeClassName="font-bold">
                                                        <p className="py-2 pl-2 font-code  transition">New Releases</p>
                                                    </Link>
                                                    <Link to={{
                                                        pathname: "/best-selling",
                                                        state: {
                                                            title: "BEST SELLING"
                                                        }
                                                    }} activeClassName="font-bold">
                                                        <p className="py-2 pl-2 font-code  transition">Best Selling</p>
                                                    </Link>
                                                </div>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <div className="flex justify-center align-middle px-3 py-2 border-b border-black">
                    <form className="w-full p-2 text-center flex" onSubmit={e => {submit(e)}}>
                        <input type="text" value={searchQuery} onInput={e => setSearchQuery(e.target.value)} placeholder="SEARCH..." className="font-code text-base text-black placeholder-gray-400 w-full p-2 text-center focus:outline-none"/>
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>


            <div className="hidden fixed flex-col bg-white w-full z-50 lg:flex">
                <div className="flex grid grid-cols-12 border-b border-black">
                    <div className="col-span-1 p-4 border-r border-black flex justify-center xl:p-6">
                        <div className="w-20 border">
                            <Link to="/" exact>
                                    <img src="/logo.png" alt="The Rec-Room Logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-10 flex justify-center align-middle px-3 py-2">
                        <form className="w-full text-center flex items-center" onSubmit={e => submit(e)}>
                            <input type="text" value={searchQuery} onInput={e => setSearchQuery(e.target.value)} placeholder="SEARCH..." className="font-code text-2xl text-black placeholder-gray-400 w-full p-2 text-center focus:outline-none"/>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" className=" h-14 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.65" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="col-span-1 px-8 py-4 border-l border-black flex justify-center align-middle">
                        <Link to="/cart">
                            <div className="relative text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="font-code text-lg absolute -translate-x-1/2 -translate-y-1/4 top-1/2 left-1/2">
                                    {totalItems}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between px-32 xl:px-64 border-b border-black py-4">
                    <Link to="/" exact activeClassName="font-bold">
                        <p className="text-2xl font-code text-gray-500 hover:underline">HOME</p>
                    </Link>
                    <Link to="/genres" activeClassName="font-bold">
                        <p className="text-2xl font-code text-gray-500 hover:underline">GENRES</p>
                    </Link>
                    <Link to={{
                        pathname: "/new-releases",
                        state: {
                            title: "NEW RELEASES"
                        }
                    }} activeClassName="font-bold">
                        <p className="text-2xl font-code text-gray-500 hover:underline">NEW RELEASES</p>
                    </Link>
                    <Link to={{
                        pathname: "/best-selling",
                        state: {
                            title: "BEST SELLING"
                        }
                    }} activeClassName="font-bold">
                        <p className="text-2xl font-code text-gray-500 hover:underline">BEST SELLING</p>
                    </Link>
                </div>
            </div>
            
        </>
    )
}

export default Navbar

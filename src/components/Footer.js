import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="flex grid grid-rows-3 gap-1 w-full px-12 py-16 font-code lg:grid-cols-3 lg:grid-rows-1 bg-gray-100">
            <div className="text-center px-4 lg:px-12">
                <h1 className="font-bold text-lg">About The Rec-Room</h1>
                <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Libero faucibus id varius pretium sit enim nunc sem semper. 
                    Laoreet ultrices nec nec risus hendrerit massa. Risus nibh ornare diam luctus elit aenean enim. 
                    Augue nisi risus, ut orci, magna neque commodo. Nisi eget commodo libero, tortor
                </p>
            </div>
            <div className="text-center mt-10 lg:my-0 lg:text-right">
                <ul className="list-none">
                    <li><h1 className="font-bold text-lg">Important Stuff</h1></li>
                    <li>
                        <Link to="/support">
                            <>
                                <h1 className="hover:underline text-sm">Help & Support</h1>
                            </>
                        </Link>
                    </li>
                    <li>
                        <Link to="/delivery">
                            <>
                                <h1 className="hover:underline text-sm">Delivery</h1>
                            </>
                        </Link>
                    </li>
                    <li>
                        <Link to="/terms">
                            <>
                                <h1 className="hover:underline text-sm">Terms & Condition</h1>
                            </>
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacy">
                            <>
                                <h1 className="hover:underline text-sm">Privacy Policy</h1>
                            </>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-center lg:my-0 lg:text-right">
                <ul className="list-none">
                    <li><h1 className="font-bold text-lg">Social Media</h1></li>
                    <li>
                        <a href="https://www.instagram.com">
                            <h1 className="hover:underline text-sm">Instagram</h1>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                            <h1 className="hover:underline text-sm">Twitter</h1>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                            <h1 className="hover:underline text-sm">Facebook</h1>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                            <h1 className="hover:underline text-sm">Spotify</h1>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

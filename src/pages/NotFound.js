import React from 'react'

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen">
        <img src="/ripped.jpg" className="absolute z-0 w-full" alt="" />
        <div className="mt-28 lg:mt-40 z-10">
            <h1 className="font-code text-gray-800 select-none text-3xl text-center mt-10 lg:mt-20 lg:text-5xl">THIS PAGE DOES NOT EXIST</h1>
        </div>
        </div>
    )
}

export default NotFound

import React from 'react'

function Nav() {
    return (
        <nav className=" bg-white-light w-full px-5 py-2 flex items-center font-poppins  ">
            <div className=" text-3xl font-medium flex-1 ">
                <h1 className=" text-orange-light" >Paul Shop <span className="text-gray-dark text-bold " >.</span></h1>
            </div>
            <div className=" flex justify-center items-center  ">
                <div className="bg-blue-500 w-12 h-12 ring-2 ring-orange-light rounded-full mr-4">

                </div>
                <div className="">
                    <button className=" cursor-pointer transition duration-300 hover:bg-orange-dark shadow-md  bg-orange-light py-2 px-4 rounded-xl text-white-light  text-md font-bold ">Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav

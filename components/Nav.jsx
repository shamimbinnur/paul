import React from 'react'
import dp from "../public/images/dp.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingBag , faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <nav className=" bg-white-light w-full px-5 py-2 flex items-center font-poppins  ">
            <div className=" text-2xl font-medium flex-1 flex items-center ">
                <FontAwesomeIcon className="text-gray-dark mr-4 text-md " icon={faShoppingBag} />
                <h1 className=" text-orange-light" > Paul <span className="text-gray-dark text-bold " > Shop.</span></h1>
            </div>
            <div className=" flex justify-center items-center  ">
                <div className="mr-6 flex justify-center ">
                    <FontAwesomeIcon className="cursor-pointer transition duration-300  text-orange-light   text-2xl"  icon={faSignOutAlt} />
                    
                </div>
                <div className="bg-blue-500 w-12 h-12 ring-2 ring-green overflow-hidden rounded-full ">
                    <Image
                        className="h-full w-full object-cover"
                        src={dp}
                        height={100}
                        width={100}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Nav

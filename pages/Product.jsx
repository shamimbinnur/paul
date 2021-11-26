import React from 'react'
import ProductGallery from '../components/ProductGallery'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faLink, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/fontawesome-svg-core"

const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",

]

function Product() {
    return (

        <div className="bg-gray-dark w-full font-poppins min-h-screen">
            {/* Container */}
            <div className=" container ">
                <div className=" flex justify-center flex-col md:flex-row py-3 ">
                    <ProductGallery images={images}  />

                    <div className=" flex flex-col w-full h-full px-10 md:py-20">
                        <div className="w-full h-full">
                            <div className=" mb-7">
                                <h2 className="text-3xl text-white">Nike Shoe</h2>
                                <h3 className="text-sm text-gray-300">Lorem ipsum</h3>
                            </div>
                            <div className=" mb-8">
                                <h2 className="text-md text-yellow ">Offer price: $520</h2>
                                <h3 className="text-sm text-gray-300">Price: $620</h3>
                            </div>

                            <div className=" text-md text-gray-200 mb-7 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Non similique officia reiciendis. Ea provident error consequatur
                                dolorum architecto, itaque nisi totam pariatur excepturi suscipit
                                praesentium laudantium modi placeat cum soluta? Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta dignissimos eaque laborum quaerat, voluptatibus modi id
                                necessitatibus sunt molestiae facilis quasi ad,
                                velit maxime aut impedit, sit rem expedita perferendis!
                            </div>

                            {/* Button container */}
                    
                            <div className="mb-9">
                                <button className=" bg-green hover:bg-green-dark  transition-all duration-300 rounded-3xl px-3 py-1 text-md text-gray-100 mr-3">
                                    Buy now
                                </button>
                                <button className=" bg-orange-light hover:bg-orange-dark transition-all duration-300 rounded-3xl px-3 py-1 text-md text-gray-100">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

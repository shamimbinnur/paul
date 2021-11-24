import React from 'react'

function Product() {
    return (
        <div className="bg-gray-dark w-full h-screen font-poppins ">
            {/* Container */}
            <div className=" container ">
                <div className=" flex justify-center py-3 ">

                    <div className=" flex flex-col w-full h-full px-10 py-20 " >
                        <div className="w-full h-96 rounded-xl border-2 overflow-hidden border-white  bg-blue-300 mb-4 ">
                        </div>
                        <div className="flex justify-center gap-2  ">
                            <div className=" w-14 h-14 rounded-xl border overflow-hidden border-yellow bg-blue-300 cursor-pointer "></div>
                            <div className=" w-14 h-14 rounded-xl border overflow-hidden border-yellow bg-blue-300 cursor-pointer "></div>
                            <div className=" w-14 h-14 rounded-xl border overflow-hidden border-yellow bg-blue-300 cursor-pointer "></div>
                            <div className=" w-14 h-14 rounded-xl border overflow-hidden border-yellow bg-blue-300 cursor-pointer "></div>
                        </div>
                    </div>


                    <div className=" flex flex-col w-full h-full px-10 py-20">
                        <div className="w-full h-full">
                            <div className=" mb-7">
                                <h2 className="text-3xl text-white">Nike Shoe</h2>
                                <h3 className="text-sm text-gray-300">Lorem ipsum</h3>
                            </div>
                            <div className=" mb-8">
                                <h2 className="text-md text-yellow ">Offer price: $520</h2>
                                <h3 className="text-sm text-gray-300">Price: $620</h3>
                            </div>

                            <div className=" text-sm text-gray-200 mb-7 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Non similique officia reiciendis. Ea provident error consequatur
                                dolorum architecto, itaque nisi totam pariatur excepturi suscipit
                                praesentium laudantium modi placeat cum soluta? Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta dignissimos eaque laborum quaerat, voluptatibus modi id
                                necessitatibus sunt molestiae facilis quasi ad,
                                velit maxime aut impedit, sit rem expedita perferendis!
                            </div>
                            {/* Button container */}
                            <div>
                                <button className=" bg-green rounded-3xl px-3 py-1 text-md text-gray-100 mr-3">
                                    Add to cart
                                </button>
                                <button className=" bg-orange-light rounded-3xl px-3 py-1 text-md text-gray-100">
                                    Buy now
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

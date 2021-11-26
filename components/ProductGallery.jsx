import React, { useRef, useState } from 'react'
import Image from 'next/image'
import CauroselModal from './CauroselModal'

function ProductGallery({images}) {

    const [show, setShow] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)
    const onImageClickHandel = (i)=> {
        setImageIndex(i)
    }
    

    return (
        <>
            {/* Modal */}
            <CauroselModal
                images={images} imageIndex={imageIndex} setImageIndex={setImageIndex}
                show={show} setShow={setShow}
             />
            <div className=" flex flex-col w-full  px-10 py-20 " >
                    <div onClick={()=> setShow(true)} className="w-full max-h-96 rounded-3xl border-2 overflow-hidden border-white  bg-blue-300 mb-12 ">
                        <Image
                            alt=""
                            className="w-full h-full object-fit "
                            src={images[imageIndex]}
                            height={1350}
                            width={1000}
                        />
                    </div>
                    <div className="flex justify-center ">
                        {
                            images.map((item, i) => (
                                <div key={i} className={" w-14 h-14 rounded-md mr-6 border overflow-hidden border-yellow bg-blue-300 cursor-pointer  " }>
                                    <Image
                                    alt=""
                                    className="w-full h-full object-fit  "
                                    src={images[i]}
                                    height={1100}
                                    width={1000}
                                    onClick={()=> onImageClickHandel(i)}
                                    />
                                    <p className=" text-white" >fdd</p>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </>
    )
}

export default ProductGallery

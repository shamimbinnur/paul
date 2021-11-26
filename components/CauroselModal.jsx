import React from 'react'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

function CauroselModal({images, imageIndex,setImageIndex, show, setShow}) {

    const onImageClickHandel = (i)=> {
        setImageIndex(i)
    }

    const goToNext = ()=> {
        if(imageIndex == images.length-1){
            setImageIndex(0)
        }
        else{
            setImageIndex(imageIndex+1)
        }
    }

    const goToPrev = ()=> {
        if(imageIndex == 0){
            setImageIndex(0)
        }
        else{
            setImageIndex(imageIndex-1)
        }
    }

    const visible = show ? "block" : "hidden"

    return (
        <div className={" absolute top-0 left-0 z-10  h-full w-full " + visible  }>
            <div  className=" absolute top-0 left-0   bg-gray-dark opacity-95 h-full w-full ">
            </div>
            
            <div className=" z-20 relative h-full w-full ">
                <div onClick={()=> setShow(false)} className=" z-20 text-red-600 hover:text-orange-light cursor-pointer transition-all duration-300 text-3xl h-full  absolute top-10 right-14">
                    < FontAwesomeIcon icon={faTimes} />
                </div>
                <div onClick={goToPrev} className=" z-20 text-yellow hover:text-white cursor-pointer transition-all duration-300 text-4xl h-full  absolute top-96 left-10">
                    < FontAwesomeIcon icon={faArrowCircleLeft} />
                </div>
                <div onClick={goToNext} className=" z-20 text-yellow hover:text-white cursor-pointer transition-all duration-300 text-4xl h-full  absolute top-96 right-10">
                    < FontAwesomeIcon icon={faArrowCircleRight } />
                </div>
                <div className=" h-full w-full flex flex-col justify-center items-center px-5 md:px-24 py-10 ">
                    <div  className=" flex justify-center h-full w-full  rounded-md  mb-10 overflow-hidden">
                        <Image
                            alt=""
                            className=" object-center w-full h-full rounded-md "
                            src={images[imageIndex]}
                            height={600}
                            width={600}
                        />
                    </div>
                    <div className=" flex ">
                        {
                            images.map((item, i) => (
                                    <div key={i} className={" w-14 h-14 rounded-md border overflow-hidden border-yellow bg-blue-300 cursor-pointer  mr-4  " }>
                                        <Image
                                        alt=""
                                        className="w-full h-full object-fit  "
                                        src={images[i]}
                                        height={1000}
                                        width={1000}
                                        onClick={()=> onImageClickHandel(i)}
                                        />
                                        <p className=" text-white" >fdd</p>
                                    </div>
                                ))
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CauroselModal

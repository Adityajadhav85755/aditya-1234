import React, { useEffect } from 'react'
import card1 from '../assets/Gallery/card.jpg'
import card2 from '../assets/Gallery/card2.jpg'
import { useState } from 'react'


import QuickContact from './QuickContact'
export default function Gallery({data,cols,heading}) {

    let cards = [
        {
            src: card1,
        },
        {
            src: card2,
        },
        {
            src: card1,
        },
        {
            src: card1,
        },
        {
            src: card1,
        },
        {
            src: card1,
        },

    ]

    if(data!=undefined){
        cards=data;
    }



    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    function zoomIn(e){
        console.log(e.target)
        console.log("afsan")
    }
    return (

        <section className='my-16 flex justify-center flex-col items-center gap-y-5 '>
            <h1 className='grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 ' hidden></h1>
            <div>
                <h2 className='text-[3rem] font-bold text-primary'>{heading}</h2>
            </div>
            <div className={`grid ${(cols!=undefined)?"grid-cols-"+cols:"grid-cols-3"} max-w-[1400px] w-full gap-10 bg-terniary p-8 py-12 max-[892px]:grid-cols-2 max-[892px]:place-items-center max-[686px]:grid-cols-1`}>
                {cards.map((card, i) => {
                    return <div key={i} className=' overflow-hidden   relative hover:-translate-y-2 transition-all duration-300'>
                        <img src={card.src} alt="our work" className=' rounded-lg' onClick={() => openLightbox(i)} />
                    </div>
                })}


                {isOpen &&
                    <>
                        <div className='bg-white fixed z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-w-[250px] max-h-[400px] w-full h-full p-4 rounded-md flex flex-col gap-3'>
                            <img src={currentImageIndex<0?cards[cards.length-1].src:cards[currentImageIndex].src} onDoubleClick={zoomIn} alt="" className='w-full h-[100%] rounded-md' />
                            <button onClick={() => { setIsOpen(false) }}><i class="fa-regular fa-circle-xmark absolute top-1 right-2 text-2xl text-primary"></i></button>
                        </div>
                            <button onClick={()=>{setCurrentImageIndex(currentImageIndex==cards.length-1?currentImageIndex:currentImageIndex+1)}} className='hover:bg-primary px-4  rounded-tl-full rounded-bl-full z-50  fixed right-0 top-1/2 text-white text-[3rem] cursor-pointer'>

                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                            <button onClick={()=>{setCurrentImageIndex(currentImageIndex==0?currentImageIndex:currentImageIndex-1)}} className='fixed left-0 top-1/2 text-white text-[3rem] z-50 hover:bg-primary px-4  rounded-tr-full rounded-br-full '>
                                <i className="fa-solid fa-angle-left "></i>
                            </button>
                        <div className='fixed bg-black opacity-50 w-full h-full top-0 left-0 text-white'>
                        </div>
                    </>
                }
            </div>

        </section>
    )
}

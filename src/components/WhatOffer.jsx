import React from 'react'

export default function WhatOffer() {
  let lis=[
    "Corporate Shifting",
"Domestic Shifting",
"House Shifting",
"Local Shifting",
 "Long Distance Shifting",
  ]
  return (
    
    <section className=' flex flex-col items-center bg-primary text-white w-full px-4 py-4 pb-8'>
    <div className='  w-full max-w-[1000px] m-auto'>
      <h2 className='text-center font-bold text-other2 text-2xl mb-4'>What We Offer</h2>
<ul className='grid grid-cols-4 list-disc gap-2 list-inside'>
  {lis.map((li,i)=>{
    return <li>{li}</li>
  })}

  
</ul>
      {/* </div> */}



    </div>
  </section>
  )
}

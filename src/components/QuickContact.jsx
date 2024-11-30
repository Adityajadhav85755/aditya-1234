import React from 'react'

export default function QuickContact() {
  return (
      
      <section className='my-16 flex flex-col items-center bg-primary text-white w-full px-4 py-12'>
          <div className='grid grid-cols-3 gap-8 px-8 w-full max-w-[1000px] '>


            <div className='py-8'>
              <div className='flex flex-col items-center gap-y-4'>
                <i className="fa-solid fa-mobile-screen-button text-[3rem]"></i>
                <h4 className='text-xl font-semibold mb-4 text-[red]  '>Assistance Is Free !!</h4>
              </div>

              <div className='flex flex-col items-center font-semibold tracking-wider'>
                <p>9004780981</p>
                <p>9004780981</p>
              </div>
            </div>
            <div className='border-2 py-8 border-t-0 border-b-0 border-[#1d3366]'>
              <div className='flex flex-col items-center gap-y-4'>
                <i className="fa-regular fa-envelope text-[3rem]"></i>
                {/* <i className="fa-solid fa-mobile-screen-button "></i> */}
                <h4 className='text-xl font-semibold mb-4 text-[red]'>We Are Just Here !!</h4>
              </div>

              <div className='flex flex-col items-center font-semibold tracking-wider'>
                <p>info@skysolution.com</p>
                <p>sales@skysolution.com</p>
              </div>
            </div>
            <div className='py-8'>
              <div className='flex flex-col items-center gap-y-4'>
                <i className="fa-regular fa-clock text-[3rem]"></i>
                <h4 className='text-xl font-semibold mb-4 text-[red]'>Always Available !!</h4>
              </div>

              <div className='flex flex-col items-center font-semibold tracking-wider'>
                <p>Monday - Sunday</p>
                <p>Timing - 24 / 7</p>
              </div>
            </div>



          </div>
        </section>

  )
}

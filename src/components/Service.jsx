import React from 'react'
import { Link } from 'react-router-dom'
import shipping from '../assets/images/shifting.jpg'
export default function Service() {
  let services = [
    {
      name: "HouseShifting",
      redirect: "household"
    },

    {
      name: "OfficeShifting",
      redirect: "office"
    },

    {
      name: "ShopShifting",
      redirect: "shop"

    },

    {
      name: "VehicleShifting",
      redirect: "vehicle"
    },

    {
      name: "AC Jet Service",
      redirect: "acservice"
    },
    {
<<<<<<< HEAD
      name: "WareHouse",
      redirect: "WareHouse"
=======
      name: "WareHouse Ser",
      redirect: "wareHouse"
>>>>>>> d5cb291 (Your commit message here)
    },

  ] 
  return (
    <section className='  bg-terniary py-8 flex flex-col md:flex-row justify-around bg-other w-full md:w-[50%] mx-auto md:ml-[8%]'>
    <div className='bg-terniary grid grid-cols-2 sm:grid-cols-2 gap-16 max-w-[800px] w-full m-auto px-8 max-[437px]:place-items-center place-items-center '>
      {services.map((serv, i) => {
        return <Link to={`/${serv.redirect}`} key={i} className='max-[437px]:flex max-[437px]:justify-center'>
          <>
          <div style={{ backgroundImage: `url(${shipping})` }} className={`max-[437px]:hidden bg-center bg-cover cursor-pointer rounded-full max-[673px]:w-[100%] max-[673px]:h-28`}>
            <div className={`service border border-primary rounded-sm p-8 px-4 ${(i % 2 == 0) ? "bg-gradient-to-r text-left" : "bg-gradient-to-l text-right"} from-white to-transparent   overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] max-[673px]:h-28 
`}>
              <h3 className='text-primary text-xl font-semibold'>{serv.name}</h3>
            </div>
          </div>



          <div className='grid  rounded-tl-lg rounded-tr-lg overflow-hidden  place-items-center min-[437px]:hidden'>
            {/* <Link to={"/"}> */}
            <div className='w-full'>
              <img src={shipping} alt="" className='w-full' />

            </div>
            <div className='bg-white w-full text-center '>
              <p className='text-sm p-1 px-2 text-left text-primary font-semibold'>{serv.name}</p>
            </div>
            {/* </Link> */}
          </div>
          </>
        </Link>

      })}

    </div>
  </section>
  )
}

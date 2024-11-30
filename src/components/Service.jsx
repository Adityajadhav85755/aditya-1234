import React from 'react'
import { Link } from 'react-router-dom'
import shipping from '../assets/images/shifting.jpg'
export default function Service() {
  let services = [
    {
      name: "House Shifting",
      redirect: "household"
    },

    {
      name: "Office Shifting",
      redirect: "office"
    },

    {
      name: "Shop Shifting",
      redirect: "shop"

    },

    {
      name: "Vehicle Shifting",
      redirect: "vehicle"
    },

    {
      name: "AC Service",
      redirect: "acservice"
    },

  ]
  return (
    <section className='my-16  bg-terniary py-16'>
    <div className=' bg-terniary grid grid-cols-2 gap-16 max-w-[800px] w-full m-auto'>
      {services.map((serv, i) => {
        return <Link to={`/${serv.redirect}`} key={i}>

          <div style={{ backgroundImage: `url(${shipping})` }} className={`bg-center bg-cover cursor-pointer rounded-tl-[4rem] rounded-br-[4rem] `}>
            <div className={`service border border-primary rounded-sm p-8 px-4 ${(i % 2 == 0) ? "bg-gradient-to-r text-left" : "bg-gradient-to-l text-right"} from-white to-transparent   overflow-hidden rounded-tl-[4rem] rounded-br-[4rem]
`}>
              <h3 className='text-primary text-xl font-semibold'>{serv.name}</h3>
            </div>
          </div>
        </Link>
        //               return <Link to={`/${serv.redirect}`} key={i}>

        //               <div style={{ backgroundImage: `url(${shipping})` }} className={`bg-center bg-cover ${(i%2==0)?"rounded-br-[4rem] rounded-tr-[4rem]":" rounded-tr-[4rem] rounded-bl-[4rem]"} cursor-pointer rounded-tl-[4rem] `}>
        //                 <div className={`service border border-primary rounded-sm ${(i%2==0)?"rounded-br-[4rem] bg-gradient-to-r text-left rounded-tl-[4rem]":"rounded-bl-[4rem] bg-gradient-to-l text-right rounded-tr-[4rem] "} p-8 px-4  from-white to-transparent   overflow-hidden
        //  `}>
        //                   <h3 className='text-primary text-xl font-semibold'>{serv.name}</h3>
        //                 </div>
        //               </div>
        //             </Link>
      })}

    </div>
  </section>
  )
}

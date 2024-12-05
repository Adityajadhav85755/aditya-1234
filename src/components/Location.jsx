import React from 'react'
export default function Location() {
    let locations = [
        { city: "Mumbai", area: "Bandra" },
        { city: "Mumbai", area: "Kandivali" },
        { city: "Mumbai", area: "Borivali" },
        { city: "Mumbai", area: "Goregaon" },
        { city: "Mumbai", area: "Malad" },
        { city: "Mumbai", area: "Versova" },
        { city: "Mumbai", area: "Juhu" },
        { city: "Mumbai", area: "Santacruz" },
        { city: "Mumbai", area: "Khar" },
        { city: "Mumbai", area: "Jogeshwari" },
        { city: "Mumbai", area: "Andheri" },
        { city: "Mumbai", area: "Vile Parle" },
        { city: "Mumbai", area: "Dahisar" },
        { city: "Mumbai", area: "Chembur" },
        { city: "Navi Mumbai", area: "Vashi" },
        { city: "Navi Mumbai", area: "Nerul" },
        { city: "Navi Mumbai", area: "Airoli" },
        { city: "Navi Mumbai", area: "Kamothe" },
        { city: "Navi Mumbai", area: "Kharghar" },
        { city: "Navi Mumbai", area: "Panvel" },
        { city: "Mumbai", area: "Mulund" },
        { city: "Mumbai", area: "Bhandup" },
        { city: "Mumbai", area: "Ghatkopar" },
        { city: "Mumbai", area: "Powai" },
        { city: "Mumbai", area: "Kalyan" },
        { city: "Mumbai", area: "Dombivli" },
        { city: "Mumbai", area: "Thane" },
        { city: "Mumbai", area: "Manpada" },
        { city: "Navi Mumbai", area: "Navi Mumbai" },
        { city: "Navi Mumbai", area: "Vashi" },
        { city: "Navi Mumbai", area: "Airoli" },
        { city: "Navi Mumbai", area: "Nerul" },
        { city: "Navi Mumbai", area: "Kharghar" },
        { city: "Navi Mumbai", area: "Kamothe" },
        { city: "Navi Mumbai", area: "Panvel" },
        { city: "Mumbai", area: "Virar" },
        { city: "Mumbai", area: "Vasai" },
        { city: "Mumbai", area: "Kalyan" },
        { city: "Mumbai", area: "Bandra" },
        { city: "Mumbai", area: "Dombivli" },
        { city: "Mumbai", area: "Chembur" }
    ];
    
  return (
    <div className='bg-gray-200 pb-12'>
        <div className='px-8 py-8 max-w-[1400px] w-full m-auto '>
        <h3 className='text-2xl font-bold text-primary text-center'>Sky Need Solutions Locality</h3>
        </div>
    <div className=' px-8 grid grid-cols-4 place-items-center max-w-[1400px] w-full m-auto gap-y-2'>
        {locations.map((city,i)=>{
            return <a key={i} href={"#header"} className='text-gray-700 scroll-smooth'>Packers And Movers In {city.area}</a>
        })}
        
    </div>
    {/* <a href="#afsan" className='text-gray-700 scroll-smooth'>Packers And Movers In </a> */}
    </div>
  )
}

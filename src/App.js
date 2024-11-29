import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { useState } from 'react';
import Gallery from './components/Gallery';
import worker from './assets/images/worker.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useRef } from 'react';
import aboutImg from './assets/images/about.png'
import QuickContact from './components/QuickContact';
import shipping from './assets/images/shifting.jpg';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import Login from './components/Login';
let LoginContext = React.createContext();
function App() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  let [form, setForm] = useState({ location: "", phone: "", type: "", service: "", detail: "" })
  let [showLoginForm, setShowLoginForm] = useState(true)
  function handleFormInput(e) {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  let storeData = (e) => {
    e.preventDefault();
    console.log(form)
  }

  let corousel = useRef(null)
  let [withinForm, setWithingForm] = useState({ city: "", sourceLocality: "", destinationLocality: "", choice: "movers", date: "" })
  let [betweenForm, setBetweenForm] = useState({ city: "", destinationCity: "", choice: "movers", date: "" })
  // let [ctaForm, setCtaForm] = useState({ name: "", email: "", phone: "", moveFrom: "", moveTo: "" })

  let withinButton = useRef(null)
  let formForWithin = useRef(null)
  let betweenButton = useRef(null)
  let formForBetween = useRef(null)
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



  let reviews = [
    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 1,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 2,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 3,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 4,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 5,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 5,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 5,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 5,
    },

    {
      name: "Afsna Idrisi",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus debitis sunt ut autem magnam consequuntur in minima, aspernatur aut?",
      star: 5,
    },


  ]



  function handleInput(e) {
    let { name, value } = e.target;
    setWithingForm({ ...withinForm, [name]: value })
  }

  function handleBetweenFormInput(e) {
    let { name, value } = e.target;
    setBetweenForm({ ...betweenForm, [name]: value })

  }
  function handleWithinForm(e) {
    e.preventDefault();
    console.log(withinForm)
  }

  function handleBetweenForm(e) {
    e.preventDefault();
    console.log(betweenForm)
  }

  function showBetweenForm() {
    formForWithin.current.style.display = "none";
    formForBetween.current.style.display = "flex";
    betweenButton.current.classList.remove("unActiveForm")
    betweenButton.current.classList.add("activeForm")
    withinButton.current.classList.add("unActiveForm")

  }
  function showWithinForm() {
    formForWithin.current.style.display = "flex";
    formForBetween.current.style.display = "none";
    withinButton.current.classList.remove("unActiveForm")
    withinButton.current.classList.add("activeForm")
    betweenButton.current.classList.add("unActiveForm")
  }
  return (

    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <div className='max-w-[500px] m-auto bg-terniary p-4 my-10 rounded-md'>
            <div className='flex justify-evenly bg-white text-white py-2 rounded-md gap-x-10 mb-4'>
              <div className='text-center m-4 my-0'>
                <button className='bg-primary p-2 px-8 font-semibold tracking-wide w-full rounded-md' ref={withinButton} onClick={showWithinForm}>Within City</button>
              </div>
              <div className='text-center m-4 my-0 '>
                <button className=' text-primary  p-2 px-8 font-semibold tracking-tight  w-full rounded-md ' ref={betweenButton} onClick={showBetweenForm}>Between Cities</button>
              </div>
            </div>



            <form action="" className='flex flex-col px-4 py-4 gap-y-4 text-primary ' onSubmit={handleWithinForm} ref={formForWithin}>
              <div className='relative'>
                <i className="fa-solid fa-city absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select name="city" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.city} onChange={handleInput}>
                  <option value="">-- Select City --</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="thane">Thane</option>
                  <option value="nashik">Nashik</option>
                </select>
              </div>
              <div className='relative '>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
                <input type="text" name='sourceLocality' placeholder='Enter Your Locality' value={withinForm.sourceLocality} onChange={handleInput} className='w-full py-2 px-4 pl-10 rounded-full border-primary border' />
              </div>
              <div className='relative'>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>

                <input type="text" name='destinationLocality' placeholder='Enter Your Destination Locality' value={withinForm.destinationLocality} onChange={handleInput} className='w-full py-2 px-4 pl-10  rounded-full border-primary border' />
              </div>
              <div className='relative'>
                <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select name="choice" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.choice} onChange={handleInput}>
                  <option value="movers">Only Movers</option>
                  <option value="Movers & Tempo">Movers & Tempo</option>
                  <option value="Movers & Truck">Movers & Truck</option>
                  <option value="Movers & Vehicle">Movers & Vehicle</option>
                </select>
              </div>


              <div className='relative'>
                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <input type="date" name='date' className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.date} onChange={handleInput} />
              </div>

              <div className=''>
                <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
              </div>
            </form>


            <form action="" className='flex flex-col px-4 py-4 gap-y-4 text-primary hidden' onSubmit={handleBetweenForm} ref={formForBetween}>
              <div className='relative'>
                {/* <i className="fa-solid fa-city absolute top-1/2 -translate-y-1/2 text-lg left-3"></i> */}
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>

                <select name="city" className='w-full py-2 px-4 rounded-full pl-10' value={betweenForm.city} onChange={handleBetweenFormInput}>
                  <option value="">-- Select Source City --</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="thane">Thane</option>
                  <option value="nashik">Nashik</option>
                </select>
              </div>

              <div className='relative'>
                {/* <i className="fa-solid fa-city absolute top-1/2 -translate-y-1/2 text-lg left-3"></i> */}
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>

                <select name="destinationCity" className='w-full py-2 px-4 rounded-full pl-10' value={betweenForm.destinationCity} onChange={handleBetweenFormInput}>
                  <option value="">-- Select Destination City --</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="thane">Thane</option>
                  <option value="nashik">Nashik</option>
                </select>
              </div>

              {/* <div className='relative'>
            <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>

              <input type="text" name='destinationLocality' placeholder='Enter Your Destination Locality' value={withinForm.destinationLocality} onChange={handleInput} className='w-full py-2 px-4 pl-10  rounded-full' />
            </div> */}
              <div className='relative'>
                <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select name="choice" id="" className='w-full py-2 px-4 rounded-full pl-10' value={betweenForm.choice} onChange={handleBetweenFormInput}>
                  <option value="movers">Only Movers</option>
                  <option value="Movers & Tempo">Movers & Tempo</option>
                  <option value="Movers & Truck">Movers & Truck</option>
                  <option value="Movers & Vehicle">Movers & Vehicle</option>
                </select>
              </div>


              <div className='relative'>
                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <input type="date" name='date' className='w-full py-2 px-4 rounded-full pl-10' value={betweenForm.date} onChange={handleBetweenFormInput} />
              </div>

              <div className=''>
                <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
              </div>
            </form>
          </div>
        </section>



        <section className='my-8  bg-terniary py-16'>
          <div className=' bg-terniary grid grid-cols-2 gap-16 max-w-[800px] w-full m-auto'>
            {services.map((serv, i) => {
              console.log(i)
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


        <section className='my-8 bg-terniary flex flex-col items-center py-12 pb-0 px-8'>
          <div className='flex justify-center items-center'>
            <div className='w-1/2 h-full flex justify-center'>
              <img src={aboutImg} alt="about us" className='w-[600px]' />
            </div>
            <div className='w-1/2 flex flex-col p-4 px-0'>
              <h2 className='font-bold text-primary text-2xl'>About Us</h2>
              <p className='my-2'>We, Max Packers And Movers, located in Mumbai area, Kandivali EAST. Packers And Movers Is Great Service Provider In Mumbai For Shifting. We started our business in 2009, Initialy We provide shifting services within city. We deals with great customers and have great experiance.</p>
              <p className='my-2'>
                Max Packers And Movers in Mumbai, India is a trustworthy relocation and storage services company, serving inside and outside of India. We provide affordable and best packers and movers services in Mumbai i.e home shifting, office relocation, vehicle transportation, warehousing, and logistics services to the companies and families all over the world.
              </p>

              <p className='my-2'>Initially we face some dificulties but we never stop. As part of expansion we now provide warehouse services also, We have our own wan for relocation and now relocating.</p>
              <ul className='list-disc'>
                <li>Residential Moving</li>
                <li>Commercial Moving</li>
                <li>Domestic Relocation Services</li>
                <li>International Home Relocation And Office Relocation Solutions</li>
                <li>Car & Bike Carrier Service</li>
              </ul>
            </div>
          </div>

        </section>

        <section className='my-8 flex flex-col items-center bg-primary text-white w-full px-4 py-12'>
          <div className='max-w-[1000px] w-full '>
            <div>
              <h3 className='text-3xl font-bold before:content-[""] before:bg-white before:absolute relative before:top-0 before:left-0 before:w-1 before:h-full  px-4 pt-2  mb-8 tracking-wide'>Why Choose Us</h3>
            </div>
            <div className='grid grid-cols-4 gap-8 px-8'>
              <div>
                <ul className='text-lg font-semibold list-disc'>
                  <li>
                    Concept Design
                  </li>
                  <li>
                    Deliver Environmentally Responsible Client Services
                  </li>
                  <li>Drive Continous Improvements</li>
                </ul>
              </div>
              <div>
                <ul className='text-lg font-semibold list-disc'>
                  <li>
                    Concept Design
                  </li>
                  <li>
                    Deliver Environmentally Responsible Client Services
                  </li>
                  <li>Drive Continous Improvements</li>
                </ul>
              </div>
              <div>
                <ul className='text-lg font-semibold list-disc'>
                  <li>
                    Concept Design
                  </li>
                  <li>
                    Deliver Environmentally Responsible Client Services
                  </li>
                  <li>Drive Continous Improvements</li>
                </ul>
              </div>
              <div>
                <ul className='text-lg font-semibold list-disc'>
                  <li>
                    Concept Design
                  </li>
                  <li>
                    Deliver Environmentally Responsible Client Services
                  </li>
                  <li>Drive Continous Improvements</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        <Gallery heading={"Our Work"} />



        <QuickContact />


        <LoginContext.Provider value={[showLoginForm, setShowLoginForm]}>
          {showLoginForm && <Login LoginContext={LoginContext   }/>}

        </LoginContext.Provider>

      </main>
      <Footer />


    </>
  );
}

export default App;

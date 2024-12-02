import './App.css';
import Navbar from './components/Navbar';
import React, { useContext, useEffect } from 'react';
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
import PopUpPlan from './components/PopUpPlan';
import Register from './components/Register';
import Service from './components/Service';
import AboutContent from './components/AboutContent';
import { LoginStatusContext } from './index';
import Sidebar from './components/Sidebar';


let LoginContext = React.createContext();
let FormContext = React.createContext();
// let LoginStatusContext = React.createContext();
function App() {
  let [loginStatus,setLoginStatus,showLoginForm,setShowLoginForm,showRegisterForm,setShowRegisterForm,userData,setUserData]=useContext(LoginStatusContext)
  // console.log(loginStatus)
  let [change, setChange] = useState(false)

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  let [form, setForm] = useState({ location: "", phone: "", type: "", service: "", detail: "" })
  // let [showLoginForm, setShowLoginForm] = useState(false)
  // let [showRegisterForm, setShowRegisterForm] = useState(false)
  let [showPlan, setShowPlan] = useState(false)
  function handleFormInput(e) {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  let storeData = (e) => {
    e.preventDefault();
    console.log(form)
  }

  let corousel = useRef(null)
  // let [withinForm, setWithingForm] = useState({ city: "", sourceLocality: "", destinationLocality: "", choice: "movers", date: "",service:"" })
  let [withinForm, setWithingForm] = useState({ sourceLocality: "", destinationLocality: "", choice: "movers", date: "", service: "", plan: "",time:"" })
  let [betweenForm, setBetweenForm] = useState({ city: "", destinationCity: "", choice: "movers", date: "" })
  // let [ctaForm, setCtaForm] = useState({ name: "", email: "", phone: "", moveFrom: "", moveTo: "" })

  let withinButton = useRef(null)
  let formForWithin = useRef(null)
  let betweenButton = useRef(null)
  let formForBetween = useRef(null)
  // let services = [
  //   {
  //     name: "House Shifting",
  //     redirect: "household"
  //   },

  //   {
  //     name: "Office Shifting",
  //     redirect: "office"
  //   },

  //   {
  //     name: "Shop Shifting",
  //     redirect: "shop"

  //   },

  //   {
  //     name: "Vehicle Shifting",
  //     redirect: "vehicle"
  //   },

  //   {
  //     name: "AC Service",
  //     redirect: "acservice"
  //   },

  // ]






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
    console.log(withinForm)
  }

  function displayPlan() {
    console.log("clicked")
    setShowPlan(true)

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


  useEffect(() => {
    setTimeout(() => {
      setShowLoginForm(true)
    }, 3000)
  }, [])
  return (

    <>
      <header>
        <LoginStatusContext.Provider value={[loginStatus,setLoginStatus,userData,setUserData,setShowLoginForm]}>
        <Navbar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/>
        {/* <Sidebar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/> */}
        </LoginStatusContext.Provider>
      </header>
      <main>
        <section>
          <div className='max-w-[500px] m-auto bg-terniary p-4 my-16 rounded-md'>
            <div className='flex justify-evenly bg-white text-white py-2 rounded-md gap-x-10 mb-4'>
              <div className='text-center m-4 my-0'>
                <button className='bg-primary p-2 px-8 font-semibold tracking-wide w-full rounded-md' ref={withinButton} onClick={showWithinForm}>Within City</button>
              </div>
              <div className='text-center m-4 my-0 '>
                <button className=' text-primary  p-2 px-8 font-semibold tracking-tight  w-full rounded-md ' ref={betweenButton} onClick={showBetweenForm}>Between Cities</button>
              </div>
            </div>



            <form action="" className='flex flex-col px-4 py-4 gap-y-4 text-primary ' onSubmit={handleWithinForm} ref={formForWithin}>

              <div className='relative '>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
                <input required type="text" name='sourceLocality' placeholder='Enter Your Locality' value={withinForm.sourceLocality} onChange={handleInput} className='w-full py-2 px-4 pl-10 rounded-full border-primary border' />
              </div>
              <div className='relative'>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>

                <input required type="text" name='destinationLocality' placeholder='Enter Your Destination Locality' value={withinForm.destinationLocality} onChange={handleInput} className='w-full py-2 px-4 pl-10  rounded-full border-primary border' />
              </div>
              <div className='relative'>
                <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select required name="choice"  className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.choice} onChange={handleInput}>
                  <option value="movers">Only Movers</option>
                  <option value="Movers & Tempo">Movers & Tempo</option>
                  <option value="Movers & Truck">Movers & Truck</option>
                  <option value="Movers & Vehicle">Movers & Vehicle</option>
                </select>
              </div>



              <div className='relative'>
              {/* <i class="fa-solid fa-suitcase"></i> */}
                <i className="fa-solid fa-suitcase absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select required name="service"  className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.service} onChange={(e) => { displayPlan(); handleInput(e); }}>
                  <option value="">-- Select Sercvice --</option>
                  <option value="housefold shifting">Household Shifting</option>
                  <option value="office shifting">Office Shifting</option>
                  <option value="shop shifting">Shop Shifting</option>
                  <option value="vehicle shifting">Vehicle Shifting</option>
                </select>
              </div>

              <div className='relative'>
                <i className="fa-solid fa-box-open absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select required name="plan"  className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.plan} onChange={handleInput}>
                  <option value="">-- Select Plan --</option>
                  <option value="base">Base Plan</option>
                  <option value="premium">Premium Plan</option>
                </select>
              </div>
              
            <div className="relative">
              <i className="fa-solid fa-clock absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select
                name="time"
                
                className="w-full py-2 px-4 rounded-full pl-10 border-primary border"
                onChange={handleInput}
                value={withinForm.time}
              >
                <option value="">-- Select Time --</option>
                <option value="9 AM to 10 AM">9 AM to 10 AM</option>
                <option value="10 AM to 11 AM">10 AM to 11 AM</option>
                <option value="11 AM to 12 PM">11 AM to 12 PM</option>
                <option value="12 PM to 1 PM">12 PM to 1 PM</option>
                <option value="1 PM to 2 PM">1 PM to 2 PM</option>
                <option value="2 PM to 3 PM">2 PM to 3 PM</option>
                <option value="3 PM to 4 PM">3 PM to 4 PM</option>
                <option value="4 PM to 5 PM">4 PM to 5 PM</option>
                <option value="5 PM to 6 PM">5 PM to 6 PM</option>
                <option value="6 PM to 7 PM">6 PM to 7 PM</option>
              </select>
            </div>

            
            <div className='relative'>
                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <input required type="date" name='date' className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.date} onChange={handleInput} />
              </div>

              <div className=''>
                <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
              </div>
            </form>




            <form action="" className='flex-col px-4 py-4 gap-y-4 text-primary hidden ' onSubmit={handleBetweenForm} ref={formForBetween}>

              <div className='relative '>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
                <input required type="text" name='sourceLocality' placeholder='Enter Your Locality' value={withinForm.sourceLocality} onChange={handleInput} className='w-full py-2 px-4 pl-10 rounded-full border-primary border' />
              </div>
              <div className='relative'>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>

                <input required type="text" name='destinationLocality' placeholder='Enter Your Destination Locality' value={withinForm.destinationLocality} onChange={handleInput} className='w-full py-2 px-4 pl-10  rounded-full border-primary border' />
              </div>
              <div className='relative'>
                <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select required name="choice"  className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.choice} onChange={handleInput}>
                  <option value="movers">Only Movers</option>
                  <option value="Movers & Tempo">Movers & Tempo</option>
                  <option value="Movers & Truck">Movers & Truck</option>
                  <option value="Movers & Vehicle">Movers & Vehicle</option>
                </select>
              </div>



              <div className='relative'>
                <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select required name="service"  className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.service} onChange={(e) => { displayPlan(); handleInput(e); }}>
                  <option value="">-- Select Sercvice --</option>
                  <option value="housefold shifting">Household Shifting</option>
                  <option value="office shifting">Office Shifting</option>
                  <option value="shop shifting">Shop Shifting</option>
                  <option value="vehicle shifting">Vehicle Shifting</option>
                </select>
              </div>

              <div className='relative'>
                <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select required name="plan"  className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.plan} onChange={handleInput}>
                  <option value="">-- Select Plan --</option>
                  <option value="base">Base Plan</option>
                  <option value="premium">Premium Plan</option>
                </select>
              </div>


              <div className="relative">
              <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select
                name="time"
                
                className="w-full py-2 px-4 rounded-full pl-10 border-primary border"
                onChange={handleInput}
                value={withinForm.time}
                required
              >
                <option value="">-- Select Time --</option>
                <option value="07:30 AM to 08:30 AM">07:30 AM to 08:30 AM</option>
                <option value="09:30 AM to 10:30 AM">09:30 AM to 10:30 AM</option>
                <option value="12:30 AM to 01:30 PM">12:30 AM to 01:30 PM</option>
                <option value="03:30 PM to 04:30 PM">03:30 PM to 04:30 PM</option>
                <option value="05:30 PM to 07:30 PM">05:30 PM to 07:30 PM</option>
              </select>
            </div>

            <div className='relative'>
                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <input required type="date" name='date' className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={withinForm.date} onChange={handleInput} />
              </div>

              <div className=''>
                <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
              </div>
            </form>


            {/* <form action="" className='flex flex-col px-4 py-4 gap-y-4 text-primary hidden' onSubmit={handleBetweenForm} ref={formForBetween}>
              <div className='relative'>
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
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>

                <select name="destinationCity" className='w-full py-2 px-4 rounded-full pl-10' value={betweenForm.destinationCity} onChange={handleBetweenFormInput}>
                  <option value="">-- Select Destination City --</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="thane">Thane</option>
                  <option value="nashik">Nashik</option>
                </select>
              </div>

              <div className='relative'>
                <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select name="choice"  className='w-full py-2 px-4 rounded-full pl-10' value={betweenForm.choice} onChange={handleBetweenFormInput}>
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
            </form> */}

            <FormContext.Provider value={[withinForm, setWithingForm, showPlan, setShowPlan]}>
              {showPlan && <PopUpPlan FormContext={FormContext} />}
            </FormContext.Provider>
          </div>
        </section>
        <Service />
        <AboutContent />
        <QuickContact />
        <Gallery heading={"Our Work"} />
        <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
          {showLoginForm && <Login LoginContext={LoginContext} />}
          {showRegisterForm && <Register LoginContext={LoginContext} />}
        </LoginContext.Provider>
      </main>
      <Footer />


    </>
  );
}

export default App;

// import service1 from "./assets/images/shifting.jpg";
// import ACService from './assets/images/AC-1.png'
// import AMCService from './assets/images/AMC.png'
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { LoginStatusContext } from "./index";
// import ACUn from '../assets/images/AC_Uninstalllation.jpeg'
// import ACUn from './assets/images/AC_Uninstalllation.jpeg'
// import ARD from './assets/images/Anti-Rust-Deep.jpg'
// import ACR from './assets/images/ACRepair.jpg'
// import GLR from './assets/images/ac-gas-leak-refill.png'
// import AI from './assets/images/ac_install.jpg'

const services = [
  {
    id: 1,
    tagId: "AC Rent",
    heading: "AC Rent",
    // img: ACR,
    desc: [
      "Provides temporary cooling solution.",
      "Suitable for short-term usage.",
      // "Cost-effective rental options available.",
    ],
    detaildesc: [
      "This is detail Provides temporary cooling solution.",
      "Suitable for short-term usage.",
      "Cost-effective rental options available.",
      "Provides temporary cooling solution.",
      "Suitable for short-term usage.",
      "Cost-effective rental options available.",
    ],
    price: 1499,
    plan: "1 Month",
    imp: true,
    plans: [
      { duration: "3 Month", price: 2800 },
      { duration: "6 Month", price: 5000 },
      { duration: "1Year", price: 9000 },
    ],
  },
  {
    id: 2,
    tagId: "AMC",
    heading: "AMC",
    desc: [
      "Regular maintenance and servicing.",
      "Suitable for short-term usage.",
      "Suitable for short-term usage.",
    ],
    detaildesc: [
      "Provides temporary cooling solution.",
      "Suitable for short-term usage.",
      "Cost-effective rental options available.",
    ],
    price: 1499,
    plan: "1 Year",
    imp: true,
    // img: ARD,
    plans: [
      { duration: "Basic", price: 22000 },
      { duration: "Advance", price: 40000 },
      { duration: "1Year", price: 70000 },
    ],
    style: { color: "red" },
  },
];

const Card = ({ handleScrollToCardService }) => {
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center ">
        {/* AC Emoji Section */}
        {/* <div className="ml-3 min-w-[80%] border flex justify-end items-start md:block hidden ">
            <Ac_Service_emogi handleScrollToService={handleScrollToService} />
          </div> */}

        {/* Service Cards Section */}
        <div className="flex flex-col justify-center items-center gap-2 md:mt-10 ">
          {services.map(
            (serv, i) =>
              serv.imp && (
                <>

                  <div
                  // id={`${serv.tagId}`}
                    key={i}
                    onClick={() => handleScrollToCardService(i)}
                    className="bg-slate-800 text-white rounded-lg p-2 lg:flex lg:flex-col lg:justify-between lg:items-center flex justify-center items-center shadow-lg xl:h-[200px] xl:w-[400px] lg:h-[200px] lg:w-[350px] md:w-[220px] w-[350px] h-[100px] cursor-pointer lg:ml-5"
                  >
                    <div className="flex flex-row justify-between items-start p-2 w-full h-full">
                      <div className="text-yellow-400 lg:text-4xl md:text-xl text-2xl font-bold">
                        <h1>{serv.heading}</h1>
                      </div>
                      <div className="text-yellow-400 font-semibold">
                        <p>
                          {serv.plan} - {serv.price}
                        </p>
                      </div>
                    </div>
                    <div>
                      {/* {<ulTag.map((point, index) => (
                        <div key={index} className="flex flex-row justify-between items-start p-2 w-full h-full">
                          <div className="flex flex-row justify-between items-start p-2 w-full h-full">
                            <p className="text-yellow-400 font-semibold">{point}</p>
                          </div>
                          </div>
                        </div>  
                      ))} */}
                    </div>
                  </div>
                </>
              )


          )}
        </div>
      </div>

    </>
  )

}

export default Card
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LoginStatusContext } from './index';
import { useContext } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ContactForm from './components/ContactForm'; // Import the ContactForm component
// import ThankYou from './components/ThankYou';
import ContactInfo from './components/ContactInfo'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

let LoginContext = React.createContext();

export default function Contact() {
  let [
    loginStatus,
    setLoginStatus,
    showLoginForm,
    setShowLoginForm,
    showRegisterForm,
    setShowRegisterForm,
    userData,
    setUserData,
  ] = useContext(LoginStatusContext);

  return (
    <>
      <header>
        <LoginStatusContext.Provider value={[loginStatus, setLoginStatus, userData, setUserData]}>
          <Navbar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm} />
        </LoginStatusContext.Provider>
      </header>

      <main>
        <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
          {showLoginForm && <Login LoginContext={LoginContext} />}
          {showRegisterForm && <Register LoginContext={LoginContext} />}
        </LoginContext.Provider>

        {/* Add Contact Form */}
        {/* <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/ThankYou" element={<ThankYou/>} />
      </Routes>
    </Router> */}
    <ContactInfo/>
    <ContactForm/>

      </main>

      <Footer />
    </>
  );
}



// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import { LoginStatusContext } from './index';
// import { useContext } from 'react'
// import Login from './components/Login'
// import Register from './components/Register'
// import contact from './components/ContactForm'
// let LoginContext = React.createContext();

// export default function Contact() {
//   let [loginStatus,setLoginStatus,showLoginForm,setShowLoginForm,showRegisterForm,setShowRegisterForm,userData,setUserData]=useContext(LoginStatusContext)
//   // let [loginStatus,setLoginStatus]=useContext(LoginStatusContext)
//   return (
//     <>
//     <header>
//     <LoginStatusContext.Provider value={[loginStatus,setLoginStatus,userData,setUserData]}>
//         <Navbar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/>

//         </LoginStatusContext.Provider>
//     </header>
    

//     <main>


//     <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
//           {showLoginForm && <Login LoginContext={LoginContext} />}
//           {showRegisterForm && <Register LoginContext={LoginContext} />}
//         </LoginContext.Provider>
//     </main>
    
//     <Footer/>
//     </>
//   )
// }

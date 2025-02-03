import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import card1 from './assets/Gallery/card.jpg'
import card2 from './assets/Gallery/card2.jpg'
import QuickContact from './components/QuickContact'
import AboutContent from './components/AboutContent'
import Service from './components/Service'
import { LoginStatusContext } from './index'
import { useContext } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Sidebar from './components/Sidebar'


let LoginContext = React.createContext();

export default function GalleryPage() {
//   let [loginStatus,setLoginStatus]=useContext(LoginStatusContext)
  let [loginStatus,setLoginStatus,showLoginForm,setShowLoginForm,showRegisterForm,setShowRegisterForm,userData,setUserData]=useContext(LoginStatusContext)

  let data = [
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
    {
        src: card1,
    },
    {
        src: card1,
    },

]
  return (
    <>
      <header>
      <LoginStatusContext.Provider value={[loginStatus,setLoginStatus,userData,setUserData]}>
        <Navbar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/>
        <Sidebar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm} />
        </LoginStatusContext.Provider>
      </header>
      <main>
      <Gallery  data={data} cols={4} heading={`" Budget Me Best Servce "`}/>
      <Service/> 
    <QuickContact/>
    <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
          {showLoginForm && <Login LoginContext={LoginContext} />}
          {showRegisterForm && <Register LoginContext={LoginContext} />}
        </LoginContext.Provider>
      </main>
      {/* <Footer/> */}
    </>
  )
}

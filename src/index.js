// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import About from './About';
// import GalleryPage from './GalleryPage';
// import Contact from './Contact';
// import Household from './Household';
// import Office from './Office';
// import Vehicle from './Vehicle';
// import Shop from './Shop';
// import AcService from './AcService';
// // import { useState } from 'react';

// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />}/>
//       <Route path='/gallery' element={<GalleryPage />}/>
//       <Route path='/about' element={<About />}/>
//       <Route path='/contact' element={<Contact />}/>
//       <Route path='/household' element={<Household />}/>
//       <Route path='/office' element={<Office />}/>
//       <Route path='/vehicle' element={<Vehicle />}/>
//       <Route path='/shop' element={<Shop />}/>
//       <Route path='/acservice' element={<AcService />}/>
//     </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './About';
import GalleryPage from './GalleryPage';
import Contact from './Contact';
import Household from './Household';
import Office from './Office';
import Vehicle from './Vehicle';
import Shop from './Shop';
import AcService from './AcService';

// Create context
export const LoginStatusContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootApp = () => {
  const [loginStatus, setLoginStatus] = useState(false); // Global state for login
  let [showLoginForm, setShowLoginForm] = useState(false)
  let [showRegisterForm, setShowRegisterForm] = useState(false)
  let [userData,setUserData]=useState({})
  return (
    <React.StrictMode>
      <LoginStatusContext.Provider value={[loginStatus, setLoginStatus,showLoginForm,setShowLoginForm,showRegisterForm,setShowRegisterForm,userData,setUserData]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/household' element={<Household />} />
            <Route path='/office' element={<Office />} />
            <Route path='/vehicle' element={<Vehicle />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/acservice' element={<AcService />} />
          </Routes>
        </BrowserRouter>
      </LoginStatusContext.Provider>
    </React.StrictMode>
  );
};

root.render(<RootApp />);

reportWebVitals();

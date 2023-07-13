// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Navbar from '../../component/navbar'
// import { AuthContextProvider } from '../../context/authContext'
// import { useRouter } from 'next/router'
// import ProtectedRoute from '../../context/protectedRoute'
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductList from "../../component/ProductList";
// import ProductDetail from "../../component/productDetail";
// const noAuthRequired = ['/', '/login', '/signup']

// function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter()

//   return (
//     <AuthContextProvider>
//       <Navbar />
//       {noAuthRequired.includes(router.pathname) ? (
//         <Component {...pageProps} />
//       ) : ( <Router>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           {/* <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} /> */}
//         </Routes>
//       </Router>
//       )}
//     </AuthContextProvider>
//   )
// }

// export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../../component/navbar'
import { AuthContextProvider } from '../../context/authContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ProductList from "../../component/ProductList";
import ProductDetail from "../../component/productDetail";
import LoginPage from "../pages/login"
import AllEvents from "../pages/allEvents"
import SignupPage from "../pages/signup"
import MyEvent from '../pages/myEvent'
import Footer from '../../component/footer'
const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Component {...pageProps} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/allEvents" element={<AllEvents />} />
        {/* <Route path="/myEvents" element={<MyEvent product={undefined} currentUser={''} />} /> */}
        {/* <Route path="/myEvent" element={<ProtectedRoute component={myEvent} />} /> */}
        {/* <Route path="/sellProperty" element={<sellProperty />} /> */}

        <Route path="/product" element={<ProductList />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/myEvent/:uid" element={<MyEvent  />} />
       
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthContextProvider>
  )
}

export default MyApp;

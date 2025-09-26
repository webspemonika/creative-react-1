import React, { useEffect, useState } from 'react';
import Navbar from './component/header/Navbar';
import Footer from './component/footer/Footer';
import { Outlet } from 'react-router';
import Scroll from './component/scrolltotop/Scroll';
import CustomCursor from './component/customcursor/CustomCursor';
import Preloader from './component/preloader/Preloader';
import Aos from 'aos';
import'aos/dist/aos.css'
// import RightToolBar from './component/righttoolbar/RightToolBar';

const App = () => {
  // preloader start...................................
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  // aos start ........................................
  useEffect (()=>{
    Aos.init({
      duration:3000,
      once:true,
      easing:'ease-in-out',
      offset:300
    })
  }, [])
  // aos end ........................................
  if (loading) {
    return <Preloader />;   // ✅ শুধু প্রিলোডার দেখাবে
  }
  // preloader end...................................




  return (
    <>
      {/* <RightToolBar/> */}
      <CustomCursor />
      <Scroll />
      <Navbar />
      <Outlet />
      <Footer />

    </>

  );
};

export default App;
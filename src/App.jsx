import React, { useEffect, useState } from 'react';
import Navbar from './component/header/Navbar';
import Footer from './component/footer/Footer';
import { Outlet } from 'react-router';
import Scroll from './component/scrolltotop/Scroll';
import CustomCursor from './component/customcursor/CustomCursor';
import Preloader from './component/preloader/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;   // ✅ শুধু প্রিলোডার দেখাবে
  }



  return (
    <>
      
      <CustomCursor />
      <Scroll />
      <Navbar />
      <Outlet />
      <Footer />

    </>

  );
};

export default App;
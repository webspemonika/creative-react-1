import React from 'react';
import Navbar from './component/header/Navbar';
import Footer from './component/footer/Footer';
import { Outlet } from 'react-router';
import Scroll from './component/scrolltotop/Scroll';
import CustomCursor from './component/customcursor/CustomCursor';

const App = () => {
  return (
    <div>
      <CustomCursor/>
      <Scroll />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
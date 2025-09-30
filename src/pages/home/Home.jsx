import React from 'react';
import Hero from '../../component/hero/Hero';
import WhyChooseUs from '../../component/whychooseus/WhyChoose';
import Product from '../shop/Product';
// import Contact from '../contact/Contact';
import MaterialsSection from '../../component/material/MaterialsSection';
import Experience from '../../component/experience/Experience';
import Review from '../../component/review/Review';
import ContactForm from '../contact/ContactForm';
// import Line from '../../component/line/Line';
// import BorderBeamDemo from '../../component/border/BorderBeamDemo';
// import DarkLight from '../../component/dark/DarkLight';
// import CircularText from '../../component/Circular/CircularText';
// import QrCodeSection from '../../component/qrcode/QrCodeSection';
// import BarcodeSection from '../../component/barcode/BarcodeSection';
// import ProductImage from '../../component/productimage/ProductImage';
//  import CircularText from './CircularText';
const Home = () => {
    return (
        <section>
            <Hero />
            <WhyChooseUs />
            <Product headline={"Best Selling Product"} />
            <Experience />
            <MaterialsSection />
      
            {/* <QrCodeSection/>
         <BarcodeSection/>
         <ProductImage/> */}
     
            <Review />
           
            {/* <CircularText
                text="REACT*BITS*COMPONENTS*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            /> */}
            <ContactForm/>
            {/* <DarkLight/> */}
            {/* <Line/> */}
            {/* <BorderBeamDemo/> */}
        </section>
    );
};

export default Home;
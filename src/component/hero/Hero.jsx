import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import heroImg from '../../images/banner-image.jpg'
import BlurText from '../../pages/about/BlurText';
const Hero = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <section className='h-screen bg-no-repeat bg-center bg-cover flex justify-center ' style={{ backgroundImage: `url(${heroImg})` }}>

            <div className="mt-[120px] lg:mt-[160px] z-10">
                <h1 className="text-center text-white font-medium font-['Poppins'] capitalize leading-9 lg:leading-[83.20px]">
                    <BlurText
                        text="Make your interior more minimalistic & modern"
                        delay={200}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className=" lg:text-5xl text-3xl w-full lg:w-[56%] inline-block text-center mx-auto "
                    />
                </h1>

                <p className="text-center text-white  text-md lg:text-2xl font-extralight font-['Poppins']  leading-6 lg:leading-10 mt-6 lg:mt-[40px]">
                    Turn your room with panto into a lot more <br /> minimalist and modern with ease and speed</p>
                <div className="text-center absolute left-[50%] transform translate-x-[-50%] z-2">
                    <input type="text" placeholder='Search Furniture' className="cursor-pointer focus:text-amber-200 bg-white/50 py-2.5 px-5 focus:outline-none border border-gray- 300 rounded-full  w-[95vw] md:w-80 opacity-80   font-normal font-['Poppins']  mt-[25px] text-white" />
                    <div className="bg-amber-600 absolute right-3 top-7.5 p-2 text-xl rounded-full text-white ">
                        <IoSearchOutline />
                    </div>
                </div>


                <div className="absolute inset-x-0 h-2/4  bottom-0 bg-gradient-to-t from-white via-transparent to-transparent "></div>
            </div>


        </section>
    );
};

export default Hero;
import React from 'react';

const Experience = () => {
    return (
        <section className='experience-section py-[50px] lg:py-[100px]  '>
            <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 items-center px-6 space-x-0 lg:space-x-[80px] ">
                <div data-aos="fade-right"  className="experience-left">
                    <img src="experience-1.png" alt="" className='rounded-tl-2xl rounded-bl-2xl lg:w-auto w-full object-cover' />
                </div>

                {/*  */}
                <div data-aos="fade-left"  className="experience-right lg:mt[0px] mt-[40px] ">
                    <h5 className=" text-amber-600 text-md lg:text-lg text-center lg:text-left font-semibold font-['Poppins'] uppercase tracking-[3.15px]">experiences</h5>
                    <h2 className="text-stone-900 lg:text-5xl text-3xl text-center lg:text-left font-bold font-['Poppins'] capitalize pt-[15px] pb-1 ">we provide you the best experience</h2>
                    <p className=" text-stone-900  text-md lg:text-lg text-center lg:text-left font-normal font-['Poppins'] leading-6 lg:leading-loose">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials </p>
                    <a href="" className=''>More Info </a>

                </div>
            </div>
        </section>
    );
};

export default Experience;
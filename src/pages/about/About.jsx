import React from 'react';
import BlurText from './BlurText';
import bgImage from '../../images/banner-image.jpg'

const About = () => {


// react bits handler
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (

        <section className='  h-[450px] md:h-[700px] bg-cover bg-center flex justify-center  md:items-center ' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="">
                <h2 className='text-white  text-3xl md:text-5xl font-bold mt-[150px] md:mt-0'>
                    <BlurText
                        text=" About Page . "
                        delay={200}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-5xl text-[poppins] font-medium "
                    />
                </h2>
            </div>

        </section>
        


    );
};

export default About;
import React from 'react';
import BlurText from './BlurText';

const About = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <section>
            <div className="max-w-7xl mx-auto">

                <BlurText
                    text="I am Dedicated professional Web Designer . "
                    delay={200}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-3xl text-[poppins] font-medium mb-8"
                />
            </div>
        </section>
    );
};

export default About;
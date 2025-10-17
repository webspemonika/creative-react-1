import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function UltraSmoothHero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                Hi, I’m <span className="text-yellow-400">Monika Akhter</span>
            </h1>

            <h2 className="text-[100px]  font-semibold text-indigo-300">
                {/* <Typewriter
          words={[
            "Frontend Developer 💻",
            "UI/UX Designer 🎨",
            "React Enthusiast ⚛️",
            "Creative Coder ✨",
          ]}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={60}  
          deleteSpeed={40} 
          delaySpeed={2000} 
        /> */}

                <Typewriter
                    words={[
                        "Frontend Developer 💻",
                        "UI/UX Designer 🎨",
                        "React Enthusiast ⚛️",
                        "Creative Problem Solver 🧩",
                        "Tech Explorer 🚀",
                    ]}
                    loop={0} // infinite
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}     // slower typing
                    deleteSpeed={40}   // smoother delete
                    delaySpeed={2500}  // pause before change
                    
                />
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-xl text-center leading-relaxed">
                I create interactive, modern and responsive websites with a touch of creativity and smooth animations.
            </p>

            <div className="mt-8 flex gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-yellow-400 text-black rounded-xl shadow-lg hover:bg-yellow-500 transition"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-black transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}

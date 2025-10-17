import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I am <span className="text-yellow-300">Monika Akhter</span>
                </h1>

                {/* <TypeAnimation
          sequence={[
            "Frontend Developer 💻",
            2000,
            "UI Designer 🎨",
            2000,
            "React Enthusiast ⚛️",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-4xl font-semibold text-white"
          repeat={Infinity}
        /> */}
                <TypeAnimation
                    sequence={[
                        "Frontend Developer 💻", // text
                        1000,                   // wait 2s
                        "UI/UX Designer 🎨",
                        1000,
                        "React Enthusiast ⚛️",
                        1000,
                        "Problem Solver 🧩",
                        1000,
                    ]}
                    wrapper="span"
                    speed={80}          // typing speed
                    deletionSpeed={80}  // smooth backspace
                    cursor={true}       // blinking cursor
                    repeat={Infinity}   // loop forever
                    className="text-2xl md:text-4xl font-semibold text-yellow-300"
                />

                <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
                    I love building modern, responsive and interactive web applications.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-xl shadow-lg hover:bg-yellow-500 transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

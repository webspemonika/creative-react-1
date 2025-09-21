import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaGlobe,
    FaFacebookF,
    FaTwitter,
    FaDribbble,
} from "react-icons/fa";

const contactInfo = [
    {
        id: 1,
        icon: <FaMapMarkerAlt className="text-amber-500 text-xl" />,
        title: "Address",
        detail: "Royal Ln. Mesa, New Jersey 45463",
    },
    {
        id: 2,
        icon: <FaPhoneAlt className="text-amber-500 text-xl" />,
        title: "Phone Number",
        detail: "+12345 67890",
    },
    {
        id: 3,
        icon: <FaEnvelope className="text-amber-500 text-xl" />,
        title: "Email",
        detail: "Myportfy1234@gmail.com",
    },
    {
        id: 4,
        icon: <FaGlobe className="text-amber-500 text-xl" />,
        title: "Website",
        detail: "www.Myportfy.com",
    },
];

const socialLinks = [
    { id: 1, icon: <FaGlobe />, url: "https://yourwebsite.com", name: "Facbook" },
    { id: 2, icon: <FaFacebookF />, url: "https://facebook.com/yourpage", name: "Facebook" },
    { id: 3, icon: <FaTwitter />, url: "https://twitter.com/yourprofile", name: "Twitter" },
    { id: 4, icon: <FaDribbble />, url: "https://dribbble.com/yourprofile", name: "Dribble" },
];

export default function Contact() {


    return (
        <div className="bg-[#fff] text-black  flex items-center justify-center py-12 px-6">
            <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 ">
                {/* Left Side */}
                <div className="">
                    <h2 className="text-3xl font-bold mb-4">
                        Contact <span className="text-amber-500">Us</span>
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    </p>

                    <div className="space-y-6">
                        {contactInfo.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4">
                                {item.icon}
                                <div>
                                    <p className="text-gray-400">{item.title}</p>
                                    <p className="font-semibold">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Media */}

                    <div className="social-section mt-10 ">
                        <p className="social-title font-semibold mt-6 mb-10 lg:mb-3">Share Social Media</p>
                        <div className="social-icons flex justify-start gap-7">
                            {socialLinks.map((item) => (
                                <div key={item.id} className="relative group">
                                    {/* Icon */}
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl text-black h-10 w-10 rounded-full bg-white flex justify-center items-center  transition-all duration-200 shadow-md"
                                    >
                                        {item.icon}
                                    </a>

                                    {/* Tooltip */}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2  translate-y-8 group-hover:translate-y-0 z-10
                                     bg-amber-400 text-white text-sm px-2 py-1 rounded
                                      opacity-0 group-hover:opacity-100 
                                      transition-all duration-300 ease-out whitespace-nowrap ">
                                        {item.name}
                                    </span>



                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Side (Form) */}
                <div className=" form-container bg-transparent border border-gray-500 rounded-2xl  p-8">
                    <h2 className="form-title text-2xl font-bold mb-6">Add Details</h2>

                    <form className=" form-fields space-y-5">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="
                                w-full p-3    rounded-lg bg-white/20

                                border    border-gray-300   focus:border-amber-500

                                focus:ring-1  focus:ring-amber-500 focus:outline-none
                             placeholder-gray-400
                             caret-amber-500
                             transition duration-300
  "
                        />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="
                                w-full p-3    rounded-lg bg-white/20
                                border    border-gray-300   focus:border-amber-500
                                focus:ring-1  focus:ring-amber-500 focus:outline-none
                                 placeholder-gray-400
                                 caret-amber-500
                                transition duration-300"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full p-3 rounded-md bg-transparent
                             border border-gray-300 focus:border-amber-500 
                             focus:outline-none focus:ring-1 focus:ring-amber-500
                            placeholder-gray-400
                            caret-amber-500
                             transition duration-300"
                        />
                        <textarea
                            placeholder="What Would You Like to discuss?"
                            rows="4"
                            className="w-full p-3 rounded-md bg-transparent
                             border border-gray-300 focus:border-amber-500 
                             focus:outline-none focus:ring-1 focus:ring-amber-500
                            placeholder-gray-400
                            caret-amber-500
                             transition duration-300"
                        ></textarea>

                        <button
                            type="submit"
                            className=" submit-button w-full py-2  rounded-md  border-2 border-amber-500 text-amber-500 font-medium hover:bg-amber-500 hover:text-white transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

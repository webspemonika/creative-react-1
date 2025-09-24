import React from 'react';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaGlobe,
    FaFacebookF,
    FaTwitter,
    // FaXTwitter,
    FaDribbble
} from "react-icons/fa";


const ContactForm = () => {

    const contactInfo = [
        {

            icon: <FaMapMarkerAlt className="text-amber-500 text-2xl" />,
            title: "Address",
            value: "Royal Ln. Mesa, New Jersey 45463",
        },
        {
            icon: <FaPhoneAlt className="text-amber-500 text-2xl" />,
            title: "Phone Number",
            value: "+12345 67890",
        },
        {
            icon: <FaEnvelope className="text-amber-500 text-2xl" />,
            title: "Email",
            value: "Myportfy1234@gmail.com",
        },
        {
            icon: <FaGlobe className="text-amber-500 text-2xl" />,
            title: "Website",
            value: "www.Myportfy.com",
        },
    ];
    const socialLinks = [
        { icon: <FaFacebookF />, href: "#" },
        { icon: <FaTwitter />, href: "#" },
        // { icon: <FaXTwitter />, href: "#" },
        { icon: <FaDribbble />, href: "#" },
    ];
    return (
        <section className=' lg:py-[100px] py-[40px]  '>
            <div className="max-w-6xl  mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:py-0 py-5">
                    {/* left */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            Contact <span className="text-amber-500">Us</span>
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    {item.icon}
                                    <div>
                                        <h4 className="text-gray-400 text-sm">{item.title}</h4>
                                        <p className="font-semibold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <p className="font-semibold mb-3">Share Social Media</p>
                            <div className="flex items-center gap-4 text-lg text-gray-300">
                                {socialLinks.map((s, idx) => (
                                    <a
                                        key={idx}
                                        href={s.href}
                                        className=" h-[40px] w-[40px] rounded-full flex justify-center items-center text-2xl text-white bg-amber-500  transition"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="bg-transparent border border-gray-500 rounded-2xl p-8 w-full">
                        <h2 className="text-2xl font-bold mb-6 text-center">Add Details</h2>
                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="w-full p-3 rounded-md bg-transparent border border-gray-400
     focus:border-amber-500 focus:ring-1 focus:ring-amber-500
     placeholder-gray-400 caret-amber-500 outline-none transition"
                            />
                            <input
                                type="email"
                                placeholder="Email Address*"
                                className="w-full p-3 rounded-md bg-transparent border border-gray-400
     focus:border-amber-500 focus:ring-1 focus:ring-amber-500
     placeholder-gray-400 caret-amber-500 outline-none transition"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number*"
                                className="w-full p-3 rounded-md bg-transparent border border-gray-400
     focus:border-amber-500 focus:ring-1 focus:ring-amber-500
     placeholder-gray-400 caret-amber-500 outline-none transition"
                            />
                            <textarea
                                rows="4"
                                placeholder="What Would You Like to discuss?"
                                className="w-full p-3 rounded-md bg-transparent border border-gray-400
     focus:border-amber-500 focus:ring-1 focus:ring-amber-500
     placeholder-gray-400 caret-amber-500 outline-none transition"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-full border border-amber-500
     text-amber-500 font-medium hover:bg-amber-500 hover:text-white
     transition"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;









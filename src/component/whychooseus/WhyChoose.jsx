import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const features = [
  {
    title: "Luxury facilities",
    desc: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    link: "More Info",
    icon: <CgArrowLongRight />

  },
  {
    title: "Affordable Price",
    desc: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    link: "More Info",
    icon: <CgArrowLongRight />

  },
  {
    title: "Many Choices",
    desc: "We provide many unique work space choices so that you can choose the workspace to your liking.",
    link: "More Info",
    icon: <CgArrowLongRight />
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" py-10 md:py-24">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4  md:items-start items-center">

        {/* বাম পাশের হেডিং */}
        <div className="">
          <h2 className="text-stone-900  text-2xl text-center lg:text-left lg:text-5xl font-bold font-['Poppins']  leading-8 lg:leading-15">
            Why <br /> Choosing Us
          </h2>
        </div>

        {/* ডান পাশের map data */}
        {features.map((item, index) => (
          <div key={index} className=" w-[90%] mx-auto md:mt-0 mt-8  lg:w-[270px] lg:text-left text-center " >
            <h3 className="opacity-90 text-stone-900  text-xl lg:text-2xl font-semibold font-['Poppins']">{item.title}</h3>
            <p className=" text-stone-900 text-base font-normal font-['Poppins'] leading-7 md:mt-[14px] mb-0.5 ">{item.desc}</p>
            <a href="#" className="text-orange-500 text-sm font-medium inline-flex items-center gap-1">{item.link} {item.icon} </a>
          </div>
        ))}
      </div>
    </section>
  );
}

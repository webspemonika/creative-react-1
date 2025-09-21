import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    // footerData.js  
    // with icon , without icon
    const FooterLinks = [
        { title: "Services", items: ["Email Marketing", "Campaigns", "Branding"] },
        { title: "Furniture", items: ["Beds", "Chair", "All"] },
        {
            title: "Follow Us", items: [
                { name: "Facebook", icon: "FaFacebook" },
                { name: "Twitter", icon: "FaTwitter" },
                { name: "Instagram", icon: "FaInstagram" },
            ],
        },
    ];

    return (
        <div>
            <footer class="footer-section bg-gray-100 pt-[50px] lg:pt-[120px] pb-[55px] " >
                <div className="footer-container container max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 px-6">
                    {/* 1 */}
                    <div className="footer-left   mb-5 lg:mb-0  ">
                        <img src="footer-logo.png" className="text-xl font-bold font-['Poppins'] text-gray-800 mb-[22px]  " />
                        <p className="   text-stone-900 text-base font-medium font-['Poppins'] leading-normal">The advantage of hiring a workspace <br /> with us is that givees you comfortable <br /> service and all-around facilities.</p>
                    </div>
                    {/* 2 */}
                    <div className="footer-column grid grid-cols-1 lg:grid-cols-3 ">
                        {FooterLinks.map((section, index) => (
                            <div key={index} className=" " >
                                <h3 className="text-orange-400 text-xl font-bold font-['Poppins']">{section.title}</h3>
                                <ul className=" mt-2">
                                    {section.items.map((item, i) => (

                                        <li key={i} className="py-[8px] hover:text-amber-500 text-stone-900 text-base font-medium font-['Poppins'] leading-normal  cursor-pointer flex items-center gap-2">
                                            {/* আইকন প্রয়োজন হলে */}
                                            {item.icon === "FaFacebook" && <FaFacebook />}
                                            {item.icon === "FaTwitter" && <FaTwitter />}
                                            {item.icon === "FaInstagram" && <FaInstagram />}
                                            {item.name || item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
                {/* 3 outof footer container */}
                <div className="max-w-3xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>Copyright © 2025</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black">Terms & Conditions</a>
                        <a href="#" className="hover:text-black">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;


// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//     const FooterLinks = [
//         { title: "Services", items: ["Email Marketing", "Campaigns", "Branding"] },
//         { title: "Furniture", items: ["Beds", "Chair", "All"] },
//         {
//             title: "Follow Us", items: [
//                 { name: "Facebook", icon: "FaFacebook" },
//                 { name: "Twitter", icon: "FaTwitter" },
//                 { name: "Instagram", icon: "FaInstagram" },
//             ],
//         },
//     ];

//     return (
//         <div>
//             <footer className="footer-section bg-gray-100 pt-[118px] pb-[55px] ">
//                 <div className="footer-container container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
//                     {/* 1 */}
//                     <div className="footer-left ">
//                         <img src="footer-logo.png" className="text-xl font-bold font-['Poppins'] text-gray-800 mb-[22px]  "/>
//                         <p className="   text-stone-900 text-base font-medium font-['Poppins'] leading-normal">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
//                     </div>

//                     {/* 2 - এই অংশটি গ্রিড লেআউট দ্বারা পরিচালিত হবে */}
//                     <div className="md:col-start-2 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-14  ">
//                         {FooterLinks.map((section, index) => (
//                             <div key={index} className="">
//                                 <h3 className="text-orange-400 text-base font-bold font-['Poppins']">{section.title}</h3>
//                                 <ul className=" mt-2">
//                                     {section.items.map((item, i) => (

//                                         <li key={i} className="py-[8px] text-stone-900 text-base font-medium font-['Poppins'] leading-normal  cursor-pointer flex items-center gap-2">
//                                             {/* আইকন প্রয়োজন হলে */}
//                                             {item.icon === "FaFacebook" && <FaFacebook />}
//                                             {item.icon === "FaTwitter" && <FaTwitter />}
//                                             {item.icon === "FaInstagram" && <FaInstagram />}
//                                             {item.name || item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* 3 ফুটার কন্টেইনারের বাইরে */}
//                 <div className="container  mx-auto mt-24 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500  pt-4">
//                     <p>Copyright © 2025</p>
//                     <div className="flex gap-6 mt-4 md:mt-0">
//                         <a href="#" className="hover:text-black">Terms & Conditions</a>
//                         <a href="#" className="hover:text-black">Privacy Policy</a>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;

// flexbox layouting..................
// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   const FooterLinks = [
//     { title: "Services", items: ["Email Marketing", "Campaigns", "Branding"] },
//     { title: "Furniture", items: ["Beds", "Chair", "All"] },
//     {
//       title: "Follow Us",
//       items: [
//         { name: "Facebook", icon: "FaFacebook" },
//         { name: "Twitter", icon: "FaTwitter" },
//         { name: "Instagram", icon: "FaInstagram" },
//       ],
//     },
//   ];

//   return (
//     <footer className="footer-section bg-gray-100 py-10 px-6">
//       <div className="footer-container container mx-auto flex flex-col md:flex-row md:justify-around gap-10">
//         {/* Left Section */}
//         <div className="footer-left max-w-sm">
//           <h2 className="text-xl font-bold font-['Poppins'] text-gray-800">Panto</h2>
//           <p className="text-gray-600 mt-2">
//             The advantage of hiring a workspace <br />
//              with us is that gives you comfortable <br /> service and all-around facilities.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col sm:flex-row gap-10 md:gap-16 flex-wrap">
//           {FooterLinks.map((section, index) => (
//             <div key={index}>
//               <h3 className="text-orange-400 text-base font-bold font-['Poppins']">
//                 {section.title}
//               </h3>
//               <ul className="space-y-2 mt-2">
//                 {section.items.map((item, i) => (
//                   <li
//                     key={i}
//                     className="text-gray-700 hover:text-black cursor-pointer flex items-center gap-2"
//                   >
//                     {item.icon === "FaFacebook" && <FaFacebook />}
//                     {item.icon === "FaTwitter" && <FaTwitter />}
//                     {item.icon === "FaInstagram" && <FaInstagram />}
//                     {item.name || item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="max-w-6xl container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t pt-4">
//         <p>Copyright © 2025</p>
//         <div className="flex gap-6 mt-4 md:mt-0">
//           <a href="#" className="hover:text-black">Terms & Conditions</a>
//           <a href="#" className="hover:text-black">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








// class. better understanding ..............................................................................................
// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { footerLinks } from "./footerData";
// import "./Footer.css"; // external css

// export default function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-container">

//                 {/* Left Section */}
//                 <div className="footer-info">
//                     <h2 className="footer-logo">Panto</h2>
//                     <p className="footer-text">
//                         The advantage of hiring a workspace with us is that givees you
//                         comfortable service and all-around facilities.
//                     </p>
//                 </div>

//                 {/* Dynamic Sections */}
//                 {footerLinks.map((section, index) => (
//                     <div className="footer-column" key={index}>
//                         <h3 className="footer-title">{section.title}</h3>
//                         <ul className="footer-list">
//                             {section.items.map((item, i) => (
//                                 <li className="footer-item" key={i}>
//                                     {item.icon === "FaFacebook" && <FaFacebook />}
//                                     {item.icon === "FaTwitter" && <FaTwitter />}
//                                     {item.icon === "FaInstagram" && <FaInstagram />}
//                                     {item.name || item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>

//             {/* Bottom Section */}
//             <div className="footer-bottom">
//                 <p>Copyright © 2025</p>
//                 <div className="footer-links">
//                     <a href="#">Terms & Conditions</a>
//                     <a href="#">Privacy Policy</a>
//                 </div>
//             </div>
//         </footer>
//     );
// }

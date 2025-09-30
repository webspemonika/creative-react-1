// image 
// import React from "react";

// const MaterialsSection = () => {
//   const images = [
//     { id: 1, src: "materials-1.png", alt: "Chair" },
//     { id: 2, src: "materials-2.png", alt: "Sofa" },
//     { id: 3, src: "materials-3.png", alt: "Dining Table" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
//         {/* Left Content */}
//         <div className="md:w-1/2">
//           <p className="text-orange-500 font-semibold uppercase tracking-widest">
//             Materials
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900 mt-3">
//             Very Serious <br /> Materials For Making <br /> Furniture
//           </h2>
//           <p className="text-gray-600 mt-4 leading-relaxed">
//             Because panto was very serious about designing furniture for our
//             environment, using a very expensive and famous capital but at a
//             relatively low price
//           </p>
//           <a
//             href="#"
//             className="inline-flex items-center mt-6 text-orange-500 font-medium"
//           >
//             More Info <span className="ml-2">→</span>
//           </a>
//         </div>

//         {/* Right Images */}
//         <div className="md:w-1/2 grid grid-cols-2 gap-6">
//           {images.map((img, index) => (
//             <div
//               key={img.id}
//               className={`rounded-2xl overflow-hidden shadow-md ${
//                 index === 2 ? "col-span-2" : ""
//               }`}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MaterialsSection;



// perfect image........................*:import React from "react";

// const MaterialsSection = () => {
//   const images = [
//     { id: 1, src: "materials-1.png", alt: "Chair", size: "small" },
//     { id: 2, src: "materials-2.png", alt: "Sofa", size: "small" },
//     { id: 3, src: "materials-3.png", alt: "Dining", size: "large" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

//         {/* Left Side Text */}
//         <div className="md:w-1/3">
//           <p className="text-orange-500 font-semibold uppercase tracking-widest">
//             Materials
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900 mt-3">
//             Very Serious <br /> Materials For Making <br /> Furniture
//           </h2>
//           <p className="text-gray-600 mt-4 leading-relaxed">
//             Because panto was very serious about designing furniture for our
//             environment, using a very expensive and famous capital but at a
//             relatively low price
//           </p>
//           <a
//             href="#"
//             className="inline-flex items-center mt-6 text-orange-500 font-medium"
//           >
//             More Info <span className="ml-2">→</span>
//           </a>
//         </div>

//         {/* Right Side Images */}
//         <div className="md:w-1/2 flex gap-6">
//           {/* Left Column Small Images */}
//           <div className="flex flex-col gap-6 flex-1">
//             {images
//               .filter((img) => img.size === "small")
//               .map((img) => (
//                 <div
//                   key={img.id}
//                   className="rounded-2xl overflow-hidden shadow-lg"
//                 >
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//           </div>

//           {/* Right Column Large Image */}
//           <div className="flex-1">
//             {images
//               .filter((img) => img.size === "large")
//               .map((img) => (
//                 <div
//                   key={img.id}
//                   className="rounded-2xl overflow-hidden shadow-lg h-full"
//                 >
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MaterialsSection;


// fixed image 
// import React from "react";

// const MaterialsSection = () => {
//   const images = [
//     { id: 1, src: "materials-1.png", alt: "Chair", w: 223, h: 229, size: "small" },
//     { id: 2, src: "materials-2.png", alt: "Sofa", w: 223, h: 317, size: "small" },
//     { id: 3, src: "materials-3.png", alt: "Dining", w: 629, h: 445, size: "large" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

//         {/* Left Side Text */}
//         <div className="md:w-1/2">
//           <p className="text-orange-500 font-semibold uppercase tracking-widest">
//             Materials
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900 mt-3">
//             Very Serious <br /> Materials For Making <br /> Furniture
//           </h2>
//           <p className="text-gray-600 mt-4 leading-relaxed">
//             Because panto was very serious about designing furniture for our
//             environment, using a very expensive and famous capital but at a
//             relatively low price
//           </p>
//           <a
//             href="#"
//             className="inline-flex items-center mt-6 text-orange-500 font-medium"
//           >
//             More Info <span className="ml-2">→</span>
//           </a>
//         </div>

//         {/* Right Side Images */}
//         <div className="md:w-1/2 flex gap-6">
//           {/* Left Column Small Images */}
//           <div className="flex flex-col gap-6">
//             {images
//               .filter((img) => img.size === "small")
//               .map((img) => (
//                 <div
//                   key={img.id}
//                   style={{ width: `${img.w}px`, height: `${img.h}px` }}
//                   className="rounded-2xl overflow-hidden shadow-xl self-end"
//                 >
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//           </div>

//           {/* Right Column Large Image */}
//           {/* Right Column Large Image - set bottom */}
//           <div className="flex flex-col justify-end">
//             {images
//               .filter((img) => img.size === "large")
//               .map((img) => (
//                 <div
//                   key={img.id}
//                   style={{ width: `${img.w}px`, height: `${img.h}px` }}
//                   className="rounded-2xl overflow-hidden shadow-lg self-end"
//                 >
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MaterialsSection;

// responsive
import React from "react";

const MaterialsSection = () => {

  return (
    <section className=" py-[40px] lg:py-[80px]   bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gird-cols-1 items-center">
          {/* left */}
          <div className="">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-center lg:text-left  font-[poppins]">
              Materials
            </p>
            <h2 className="text-2xl  lg:text-3xl font-bold text-gray-900 mt-3 text-center lg:text-left font-[poppins] leading-10">
              Very Serious
              <span className="sm:block md:hidden lg:hidden"></span>
              Materials For Making
              <span className="sm:block md:hidden lg:hidden"></span>
              Furniture
            </h2>

            <p className="text-gray-600 mt-4 font-[poppins] text-center text-md lg:text-lg lg:text-left leading-4 lg:leading-8">
              Because panto was very serious about designing furniture for
              <span className="block sm:hidden md:inline lg:inline">
                <br />
              </span>
              our environment, using a very expensive and famous capital
              <span className="block sm:hidden md:inline lg:inline">
                <br />
              </span>
              but at a relatively low price
            </p>

            <a
              href="#"
              className="w-full inline-flex items-center lg:justify-start justify-center mt-6 text-orange-500 font-medium font-[poppins]  "
            >
              More Info <span className="ml-2">→</span>
            </a>
          </div>
          {/* right */}
          <div className=" flex lg:flex-row flex-col items-end space-x-0 lg:-space-x-[0px] space-y-[40px] lg:space-y-0 lg:p-0 p-5">
            <div className="lg:space-y-[47px] space-y-[30px] space-x-0 ">
              <img src="/materials-1.png" alt="" className="inline-block w-full lg:w-[223px] h-[300px] rounded-2xl   lg:h-[230px]  mx-auto object-cover"/>
              <img src="/materials-2.png" alt="" className="inline-block w-full lg:w-[223px] h-[300px] rounded-2xl  lg:h-[320px] mx-auto object-cover"/>
            </div>
            <div className="">
              <img src="/materials-3.png" alt="" className="inline-block w-[629px] lg:h-[445px] h-[300px]  mx-auto object-cover rounded-3xl lg:rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;

// import { useEffect, useState } from "react";

// export default function ScrollToButton() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
//       setProgress(Math.min(100, Math.max(0, p)));
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const isVisible = progress > 5;

//   return (
//     <button
//       aria-label="Scroll to top"
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       className={`fixed bottom-6 right-6 z-[9999] transition-opacity duration-300 ${
//         isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//     >
//       <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-900 shadow-lg ring-1 ring-neutral-700">
//         {/* লাল ভরার লেয়ার */}
//         <span
//           className="absolute inset-x-0 bottom-0 bg-amber-500 transition-[height] duration-200"
//           style={{ height: `${progress}%` }}
//         />
//         {/* আপ-অ্যারো আইকন */}
//         <svg
//           viewBox="0 0 24 24"
//           className="relative z-10 h-5 w-5 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
//         </svg>
//       </span>
//     </button>
//   );
// }




// 2.....
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isVisible = progress > 5;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ border: "none", background: "transparent" }}
    >
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-black shadow-lg ring-1 ring-neutral-700">
        
        {/* 🌊 Double Animated Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 120 28"
          preserveAspectRatio="none"
          style={{ height: `${progress}%` }}
        >
          {/* Wave 1 - Solid Amber */}
          <path d="M0 20 Q30 10 60 20 T120 20 V30 H0 Z" fill="#f59e0b">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from="-60 0"
              to="0 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Wave 2 - Transparent Amber */}
          <path
            d="M0 22 Q30 14 60 22 T120 22 V30 H0 Z"
            fill="rgba(245, 158, 11, 0.5)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from="0 0"
              to="-60 0"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* ⬆️ Arrow Icon */}
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </span>
    </button>
  );
}

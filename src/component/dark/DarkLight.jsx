// import React, { useState, useEffect } from "react";

// const DarkLight = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // localStorage থেকে মোড recover করা (optional)
//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     if (savedMode === "true") setDarkMode(true);
//   }, []);

//   // মোড change করলে localStorage update করা
//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
//         <h1 className="text-3xl mb-5">Hello, This is {darkMode ? "Dark" : "Light"} Mode</h1>
//         <button
//           onClick={toggleMode}
//           className="px-4 py-2 bg-gray-800 text-white rounded dark:bg-white dark:text-black"
//         >
//           Toggle Mode
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DarkLight;

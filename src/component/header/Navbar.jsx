import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { IoBag } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";




// 1st component
const Navbar = () => {
  //1..........................
  const [isOpen, setIsOpen] = useState(false);

  let [onScroll , setOnScroll] =useState(false);
  useEffect(()=>{
    let scrollHandler = () => {
      if(window.scrollY > 0){
        setOnScroll(true)
      }else{
        setOnScroll(false);
      }
    }


    window.addEventListener('scroll' , scrollHandler )
  },[])
  //2....................................
  const navlinks = [
    { id: 1, name: "Furniture", path: "/", icon: "" },
    { id: 2, name: "About Us", path: "/about", icon: "" },
    {
      id: 3,
      name: "Shop",
      path: "/shop",
      // icon: <IoMdArrowDropdown />,
      children: [
        { id: 31, name: "Men", path: "/men" },
        { id: 32, name: "Women", path: "/women" },
        { id: 33, name: "Children", path: "/children" },
        { id: 34, name: "Infant", path: "/infant" },
      ],
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
      // icon: <IoMdArrowDropdown />,
      children: [
        { id: 41, name: "News", path: "/news" },
        { id: 42, name: "Tips", path: "/tips" },
      ],
    },
  ];

  // desktop menu3.......................................
  // const NavMenus = () => (
  //   <ul className="nav-menu lg:flex hidden">
  //     {navlinks.map((link) => (
  //       <li key={link.id} className="nav-item px-3 relative group">
  //         <NavLink to={link.path} className={`nav-link flex items-center text-xl px-4 ${onScroll ? 'text-black' : 'text-white'} font-semibold font-['Poppins']`}>
  //           {link.name} {link.icon && link.icon}
  //         </NavLink>

  //         {/* submenu */}
  //         {link.children && (
  //           <ul className="submenu bg-white w-[150px] absolute top-full left-0 invisible group-hover:visible translate-y-5 opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-y-0 shadow">
  //             {link.children.map((child) => (
  //               <li key={child.id} className="submenu-item px-3 py-2">
  //                 <NavLink to={child.path} className="submenu-link">
  //                   {child.name}
  //                 </NavLink>
  //               </li>
  //             ))}
  //           </ul>
  //         )}
  //       </li>
  //     ))}
  //   </ul>
  // );
//   const NavMenus = () => (
//   <ul className="nav-menu lg:flex hidden">
//     {navlinks.map((link) => (
//       <li key={link.id} className="nav-item px-3 relative group">
//         <NavLink
//           to={link.path}
//           className={({ isActive }) =>
//             `nav-link flex items-center text-xl px-4 font-semibold font-['Poppins'] ${
//               onScroll ? 'text-black' : 'text-white'
//             } ${isActive ? 'text-purple-600' : ''}`
//           }
//         >
//           {link.name} {link.icon && link.icon}
//         </NavLink>

//         {/* submenu */}
//         {link.children && (
//           <ul className="submenu bg-white w-[150px] absolute top-full left-0 invisible group-hover:visible translate-y-5 opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-y-0 shadow">
//             {link.children.map((child) => (
//               <li key={child.id} className="submenu-item px-3 py-2">
//                 <NavLink
//                   to={child.path}
//                   className={({ isActive }) =>
//                     `submenu-link ${isActive ? 'text-purple-600 font-bold' : ''}`
//                   }
//                 >
//                   {child.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// );

// const NavMenus = () => (
//   <ul className="nav-menu lg:flex hidden">
//     {navlinks.map((link) => (
//       <li key={link.id} className="nav-item px-3 relative group">
//         <NavLink
//           to={link.path}
//           className={({ isActive }) =>
//             `
//               nav-link flex items-center text-xl px-4 font-semibold font-['Poppins'] 
//               ${onScroll ? 'text-black' : 'text-white'}
//               hover:text-amber-600 transition-colors duration-300
//               ${isActive ? 'text-amber-600 underline underline-offset-[20px]' : ''}
//             `
//           }
//         >
//           {link.name} {link.icon && link.icon}
//         </NavLink>

//         {/* submenu */}
//         {link.children && (
//           <ul className="submenu bg-white w-[150px] absolute top-full left-0 invisible group-hover:visible translate-y-5 opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-y-0 shadow">
//             {link.children.map((child) => (
//               <li key={child.id} className="submenu-item px-3 py-2">
//                 <NavLink
//                   to={child.path}
//                   className={({ isActive }) =>
//                     `
//                       submenu-link block py-1 px-2 rounded
//                       hover:bg-purple-100 hover:text-amber-600 transition duration-200
//                       ${isActive ? 'text-amber-600 font-bold bg-purple-50' : 'text-gray-700'}
//                     `
//                   }
//                 >
//                   {child.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// );




const NavMenus = () => (
  <ul className="nav-menu lg:flex hidden">
    {navlinks.map((link) => (
      <li key={link.id} className="nav-item px-3 relative group">
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `
              nav-link flex items-center gap-1 text-xl px-4 font-semibold font-['Poppins'] 
              ${onScroll ? 'text-black' : 'text-white'}
              hover:text-amber-600 transition-colors duration-300
              ${isActive ? 'text-amber-600 underline underline-offset-[20px] ' : ''}
            `
          }
        >
          {link.name} {link.icon && link.icon}

          {/* show arrow only if children exist */}
          {link.children && (
            <FaChevronDown
              className="ml-1 text-sm transition-transform duration-300 group-hover:rotate-180"
            />
          )}
        </NavLink>

        {/* submenu */}
        {link.children && (
          <ul className="submenu bg-white w-[150px] rounded-xl absolute top-full left-0 invisible group-hover:visible translate-y-5 opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-y-0 shadow">
            {link.children.map((child) => (
              <li key={child.id} className="submenu-item px-3 py-2">
                <NavLink
                  to={child.path}
                  className={({ isActive }) =>
                    `
                      submenu-link block py-1 px-2 rounded
                      hover:bg-amber-100 hover:text-amber-600 transition duration-200
                      ${isActive ? 'text-amber-600 font-bold bg-amber-100' : 'text-gray-700'}
                    `
                  }
                >
                  {child.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);



  // 4................................................
  return (
    <>
      {/* Navbar */}
      <div className={`transition duration-300 ease-in-out fixed inset-x-0 z-50 ${onScroll ? 'bg-white ': 'bg-transparent '}`}>
        <nav className="navbar ">
          <div className="navbar-container lg:py-[30px] p-5 m-0 bg-red container mx-auto flex justify-between items-center ">
            {/* logo */}
            <NavLink to="/"> <img alt="nav-logo" className={`${onScroll ? 'invert': ''}`} src="../../../public/nav-logo.png" /> </NavLink>

            {/* desktop menu */}
            <NavMenus />

            {/* cart icon */}
            <div className="relative hidden lg:block">
              <span className={`text-2xl text-white  ${onScroll ? 'invert' : ' '}`} >
                <IoBag />
              </span>
              <span className="badge h-[16px] w-[16px] absolute -top-1 -right-1 rounded-full bg-orange-600 flex justify-center items-center ">
                0
              </span>
            </div>

            {/* mobile menu icon */}
            <div className="lg:hidden block">
              <span className={`text-4xl text-white cursor-pointer  ${onScroll ? 'invert': ' ' }`}   onClick={() => setIsOpen(true)}> <MdOutlineMenu /></span>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} navlinks={navlinks} />
    </>
  );
};


// 2nd component
// 5....................................................
const MobileSidebar = ({ isOpen, setIsOpen, navlinks }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (id) => { setOpenSubmenu(openSubmenu === id ? null : id); };

  return (
    <>
      {/* sidebar */}
      <div className={` sidebar-container fixed top-0 left-0 z-50
          h-full w-[80vw] bg-white shadow-lg  
          transform transition-transform duration-500 ease-in-out
          
           ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >
        {/* header */}
        <div className=" sidebar-header flex justify-between items-center p-4 border-b">
          <img src="../../../public/footer-logo.png" className="sidebar-title text-xl font-bold"/>
          <span className="sidebar-close-btn text-3xl cursor-pointer" onClick={() => setIsOpen(false)}><MdClose /></span>
        </div>

        {/* links */}
        <ul className=" sidebar-body p-4 space-y-2">
          {navlinks.map((item) => (
            <li key={item.id} className=" sidebar-item-menu-dropdownmenu-both flex flex-col py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
              <div className=" sidebar-link flex justify-between items-center" onClick={() => item.children && toggleSubmenu(item.id)}>
                <NavLink className={"sidebar-navlink"} to={item.path} onClick={() => setIsOpen(false)}> {item.name} </NavLink>
                {item.children && (<IoMdArrowDropdown className={`sidebar-dropdown-icon transition-transform ${openSubmenu === item.id ? "rotate-180" : ""}`} />
                )}
              </div>

              {/* accordion submenu */}
              {item.children && openSubmenu === item.id && (
                <ul className="pl-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.id}> <NavLink to={child.path} className="block py-1 px-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)} >{child.name}</NavLink></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* overlay */}
      {isOpen && (<div className="fixed  inset-0 z-45  bg-amber-500" ></div>)}
    </>
  );
};

export default Navbar;



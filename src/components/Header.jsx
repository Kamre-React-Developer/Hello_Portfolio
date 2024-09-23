import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Importing icons from React Icons
import Logo from "../images/apple-touch-icon.png";

const Header = () => {
  // State to track the active nav item
  const [activeNav, setActiveNav] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to handle click on a nav item
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setIsSidebarOpen(false); // Close sidebar when a nav item is clicked
  };

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar automatically on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(false); // Close sidebar on screens larger than small (640px and up)
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Icons for each nav item
  const navItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Skill", icon: <FaTools /> },
    { name: "Project", icon: <FaProjectDiagram /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-[15px] shadow-sm text-[#3db883] bg-gradient-to-l from-[#00dbde] to-[#609ce0] z-50">
      <div className="flex max-w-[1200px] mx-auto items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} className="w-[32px]" alt="Logo" />
            <h1 className="text-[20px] pl-2 text-[#fff] font-medium">
              Portfolio
            </h1>
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-white text-3xl">
              &#9776; {/* This is the hamburger icon */}
            </button>
          </div>

          {/* Navigation - Hidden on small screens, shown on screens above 'sm' */}
          <nav className="hidden md:flex text-[16px] pl-2 text-[#fff] font-medium items-center list-none gap-3 cursor-pointer">
            {navItems.map((navItem) => (
              <li
                key={navItem.name}
                onClick={() => handleNavClick(navItem.name)} // Set active on click
                className={`px-2 py-1 flex items-center gap-2 hover:text-[#aaf53a] ${
                  activeNav === navItem.name ? "border-b-2 border-[#fff]" : ""
                }`}
              >
                {navItem.icon} {/* Icon */}
                {navItem.name} {/* Name */}
              </li>
            ))}
          </nav>
        </div>
      </header>

      {/* Sidebar for small screens */}
      <div
  className={`fixed top-0 left-0 h-full w-[250px] bg-[#609ce0] p-5 text-white z-50 transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-500 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)]`} // Modified transition for smoothness
>

        <button onClick={toggleSidebar} className="text-white text-2xl mb-5">
          &times; {/* Close icon for the sidebar */}
        </button>
        <nav className="flex flex-col gap-3 list-none">
          {navItems.map((navItem) => (
            <li
              key={navItem.name}
              onClick={() => handleNavClick(navItem.name)} // Set active on click and close sidebar
              className={`cursor-pointer py-2 flex items-center gap-2 ${
                activeNav === navItem.name ? "border-b-2 border-[#0d3b0d]" : ""
              }`}
            >
              {navItem.icon} {/* Icon */}
              {navItem.name} {/* Name */}
            </li>
          ))}
        </nav>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </>
  );
}

export default Header;

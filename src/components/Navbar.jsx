import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-12 w-auto"
              src="https://dsciiitb.tech/images/logos/gdsc-logo.gif"
              alt="Logo"
            />
            <h1 className="ml-2 text-gray-800 font-bold text-xl">DSC Blogs</h1>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className={`fixed top-10 right-10 left-10 bottom-10 w-4/5 bg-white sm:hidden transform transition-transform ease-in-out z-50 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                onClick={toggleSidebar}
                className="absolute top-0 right-0 m-4 text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col h-full justify-center items-start px-6">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-600 block my-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 block my-2"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 block my-2"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 block my-2"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 block my-2"
                >
                  Tech Team
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 block my-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
          {isOpen && (
            <div className="fixed top-0 left-0 h-full w-full bg-black opacity-30"></div>
          )}
          {/* Navigation Links */}
          <div className="hidden sm:ml-8 sm:flex sm:items-center sm:justify-center">
            <div className="space-x-6">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Events
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Tech Team
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

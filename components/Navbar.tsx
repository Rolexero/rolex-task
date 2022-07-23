import React from "react";

const Navbar = () => {
  return (
    <div className=" container mx-auto ">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
             Rolex | Dog Breeds
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

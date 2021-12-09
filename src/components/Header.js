import React, { useState } from "react";
import Logo from "../images/logo-bookmark.svg";

//icons
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-md sticky top-0 w-full z-50 bg-white">
      <nav className="container flex items-center py-4">
        <div>
          <img src={Logo} alt="" className="cursor-pointer" />
        </div>
        <ul className="hidden sm:flex flex-1 items-center justify-end gap-8 uppercase text-bookmark-blue font-semibold text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Features</li>
          <button
            type="button"
            className="bg-bookmark-red text-white px-6 py-2 font-bold rounded-md uppercase"
          >
            Login
          </button>
        </ul>

        <div className="flex flex-1 items-center justify-end text-3xl cursor-pointer text-bookmark-purple sm:hidden">
          {!isOpen ? (
            <FiMenu onClick={() => setIsOpen(true)} />
          ) : (
            <MdClose onClick={() => setIsOpen(false)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

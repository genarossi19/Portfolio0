import React from "react";
import { FaGithub } from "react-icons/fa";

function NavbarDefault() {
  return (
    <nav className=" justify-between items-center px-10 relative py-10 hidden sm:flex bg-orange-200  z-10">
      <div className="flex flex-row items-center gap-4">
        <FaGithub className="text-white w-10 h-10" />
        <a href="https://github.com/genarossi19" className="no-underline"target="_blank" rel="noopener noreferrer" >
          <h2 className="text-xl text-white font-semibold hover:border-b hover:border-purple-600 hover:text-purple-500 textshadow transition-all duration-300 ease-in-out ">genarossi19</h2>
        </a>
      </div>

      <ul className="flex items-center gap-2 text-[#bdbdc0] font-medium font-poppins">
        <li>
          <a href="" className="p-3 hover:text-white">
            Inicio
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Sobre mi
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Portfolio
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Contacto
          </a>
        </li>
      </ul>

      <div>
        <button className="font-poppins text-sm px-4 py-2 rounded-full text-white font-medium bg-lightpurple  border border-white border-opacity-[.08] hover:border-opacity-25">
          Toast
        </button>
      </div>
    </nav>
  );
}
export default NavbarDefault;

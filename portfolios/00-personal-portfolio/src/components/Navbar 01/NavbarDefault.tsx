import React from "react";

function NavbarDefault() {
    return (
      <nav className="flex justify-between items-center px-10 py-5">
        <div>
          <h2 className="text-xl text-white font-semibold">genarossi19</h2>
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
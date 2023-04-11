// import { Link } from "react-router-dom";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import Search from "./Search";
import UserDetail from "./UserDetail";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white py-3 px-4 md:py-4 md:px-5 ">
      <a className="text-rose-500 flex">
        <FaHamburger size={35} className="mr-3" />{" "}
        <h1 className="text-2xl font-black text-gray-600">Arizona Sandwich</h1>
      </a>
      <Search />
      <UserDetail />
    </header>
  );
};

export default Header;

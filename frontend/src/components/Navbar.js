import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Clinic Name */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Puttaparthi Dental Care
        </h1>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 cursor-pointer"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book-appointment"
            className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600 cursor-pointer"}
          >
            Book Appointment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : null };
          }}
          className="nav-bar-link"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : null };
          }}
          className="nav-bar-link"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : null };
          }}
          className="nav-bar-link"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : null };
          }}
          className="nav-bar-link"
          to="/filter"
        >
          Filter
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : null };
          }}
          className="nav-bar-link"
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : null };
          }}
          className="nav-bar-link"
          to="/products"
        >
          Product List
        </NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "skyblue" : null };
          }}
          className="nav-bar-link"
          to="/product"
        >
          Product Create
        </NavLink>
      </li>
    </Navbar>
  );
};

export default NavBar;

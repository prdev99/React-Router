import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <h1>NavBar</h1>
      <Link to="/">Home</Link><br/>
      <Link to="/about">About</Link>
    </>
  );
};

export default NavBar;

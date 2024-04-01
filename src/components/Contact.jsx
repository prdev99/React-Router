import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <Link to="company">company</Link>
      <Link to='channel'>channel</Link>
      <Link to='other'>Other</Link>
      <Outlet />
    </>
  );
};

export default Contact;

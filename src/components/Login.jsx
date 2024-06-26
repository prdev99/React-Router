import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <h1>Login Page</h1>
      <input type="text" placeholder="Enter email"></input>
      <br />
      <br />
      <input type="text" placeholder="Enter password"></input>
      <br />
      <br />
      <button onClick={login}>Submit</button>
    </>
  );
};
export default Login;

import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/user/anil" state={{name: 'Shyam ji'}}>Anil</Link><br/>
      <Link to="/user/shyam">Shyam</Link>
    </>
  );
};

export default About;

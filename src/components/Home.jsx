import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navtoPage = (url) => {
    navigate(url);
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navtoPage("/about")}>go to about</button>
      <button onClick={() => navtoPage("/filter")}>go to filter</button>
    </>
  );
}

export default Home;

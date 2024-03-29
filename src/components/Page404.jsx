import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <h1>Page not found 404</h1>
      <p>go to home Page</p>
      <Link to="/">home</Link>
    </>
  );
};

export default Page404;

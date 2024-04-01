import { Link, useLocation, useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  const { name } = param;
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>This is {name}'s page</h1>
      <Link to="/">go to home page</Link>
    </>
  );
};
export default User;

import { Link, useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  const { name } = param;
  return (
    <>
      <h1>This is {name}'s page</h1>
      <Link to='/'>go to home page</Link>
    </>
  );
};
export default User;

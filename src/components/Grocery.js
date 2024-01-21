import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <h1 className="font-bold text-2xl m-4">
      Our Grocery online store,and we have a lot of child component inside this
      webpage!!! {loggedInUser}
    </h1>
  );
};

export default Grocery;

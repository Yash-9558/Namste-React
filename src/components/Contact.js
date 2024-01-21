import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Contact = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1 className="font-bold text-2xl m-4">Contact Us</h1>
      <h1 className="font-bold text-2xl m-4">{loggedInUser}</h1>
    </div>
  );
};

export default Contact;

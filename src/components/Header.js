import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between sm:bg-pink-100 md:bg-yellow-100 lg:bg-green-100 shadow-lg">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg font-bold">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/" className="text-lg font-bold">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="text-lg font-bold" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="text-lg font-bold">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="text-lg font-bold">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <p className="text-lg font-bold">Cart</p>
          </li>
          <button
            className="border border-black px-4 rounded-lg font-bold text-lg bg-gray-100 hover:bg-gray-200"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <p className="text-lg font-bold">{loggedInUser}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

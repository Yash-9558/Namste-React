import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.resData.cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{props.resData.resName}</h3>
      <h4>{props.resData.cuisine.join(", ")}</h4>
      <h4>{props.resData.avgRating} ⭐</h4>
      <h4>₹ {props.resData.price / 100}</h4>
      <h4>{props.resData.avgDeliveryTime} Minutes</h4>
    </div>
  );
};
const resList = [
  {
    resName: "Meghana Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    avgRating: 4.4,
    avgDeliveryTime: 38,
    price: 20000,
    cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
  },
  {
    resName: "KFC",
    cuisine: ["Burger", "Fast Food"],
    avgRating: 4.5,
    avgDeliveryTime: 40,
    price: 10000,
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restuarant, index) => (
          <RestaurantCard key={index} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

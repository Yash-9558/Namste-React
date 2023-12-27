import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockdata";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setResList(resList.filter((res) => res.avgRating > 4.0));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restuarant, index) => (
          <RestaurantCard key={index} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};
export default Body;

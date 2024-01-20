import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResList, setFilterResList] = useState([]);
  //(3)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.972056100000007&lng=72.61216010000001"
    );
    const json = await data.json();
    //optional chaining
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You Are Offline</h1>;
  }

  // jyare pan Body component mount thay tyare useOnlineStatus component pan mount thay tyare j check thai jay (darek mounting(click on header) vakhte ([] <-- useEffect execute thay))
  // console.log("HELLO");
  // (1)
  // (2)
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 rounded-lg"
            onClick={() => {
              setFilterResList(
                resList.filter((res) =>
                  //         (convert-to-lowercase)
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              setFilterResList(
                resList.filter((res) => res.info.avgRating >= 4.5)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {filterResList.map((res) => (
          <Link
            className="link"
            to={"/restaurants/" + res.info.id}
            key={res.info.id}
          >
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [vegOnly, setVegOnly] = useState(false);
  const [filterItemCards, setFilterItemCards] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    if (vegOnly) {
      const itemCards =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
          ?.card?.itemCards;
      setFilterItemCards(
        itemCards.filter((item) => item.card.info.isVeg === 1)
      );
    } else {
      setFilterItemCards(
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
          ?.card?.itemCards
      );
    }
  }, [vegOnly]);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    setFilterItemCards(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
        ?.card?.itemCards
    );
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <button
        onClick={() => {
          setVegOnly((vegOnly) => !vegOnly);
        }}
      >
        {vegOnly ? "All (Veg + Non-Veg)" : "Veg Only"}
      </button>
      <h2>Menu</h2>
      <ul>
        {filterItemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹ {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

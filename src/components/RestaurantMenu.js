import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // const [vegOnly, setVegOnly] = useState(false);
  // const [filterItemCards, setFilterItemCards] = useState([]);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // useEffect(() => {
  //   if (vegOnly) {
  //     const itemCards =
  //       resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
  //         ?.card?.itemCards;
  //     setFilterItemCards(
  //       itemCards?.filter((item) => item.card.info.isVeg === 1)
  //     );
  //   } else {
  //     setFilterItemCards(
  //       resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
  //         ?.card?.itemCards
  //     );
  //   }
  // }, [vegOnly]);

  // const fetchMenu = async () => {
  //   const data = await fetch(RESTAURANT_URL + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);

  // setFilterItemCards(
  //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
  //     ?.card?.itemCards
  // );

  // };

  if (resInfo === null) return <Shimmer />;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl m-2 text-center">{name}</h1>
      <p className="font-bold text-lg text-center">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <button
        className="p-2 bg-gray-100 m-2 rounded-lg font-bold text-lg hover:bg-gray-200 w-60"
        onClick={() => {
          setVegOnly((vegOnly) => !vegOnly);
        }}
      >
        {vegOnly ? "All (Veg + Non-Veg)" : "Veg Only"}
      </button>
      <ul>
        {filterItemCards?.map((item) => (
          <li key={item.card.info.id} className="p-2">
            {item.card.info.name} - ₹ {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex}
          setShowIndex={(prevIndex) => {
            if (prevIndex === -1) {
              setShowIndex(prevIndex);
            } else {
              setShowIndex(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

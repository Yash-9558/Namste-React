import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:mt-[-2px] hover:duration-[0.5s]">
      <img
        className="rounded-lg"
        src={CDN_URL + props.resData.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{props.resData.name}</h3>
      <h4>{props.resData.cuisines.join(", ")}</h4>
      <h4>{props.resData.avgRating} ⭐</h4>
      <h4>{props.resData.costForTwo}</h4>
      <h4>{props.resData.sla.deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestaurantCard;

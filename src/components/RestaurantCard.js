import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + props.resData.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{props.resData.name}</h3>
      <h4>{props.resData.cuisines.join(", ")}</h4>
      <h4>{props.resData.avgRating} ⭐</h4>
      <h4>{props.resData.costForTwo}</h4>
      <h4>{props.resData.sla.deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestaurantCard;

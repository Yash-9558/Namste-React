import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-gray-200 border-b-2 flex justify-between"
        >
          <div className="w-9/12 py-4">
            <div>
              <div className="font-bold">
                {item.card?.info?.name} - ₹
                {item.card?.info?.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-1 relative">
            <div className="absolute top-16 left-10">
              <button className="p-1 bg-black shadow-lg rounded-lg text-white">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card?.info?.imageId}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

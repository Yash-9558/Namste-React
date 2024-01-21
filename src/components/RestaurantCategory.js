import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gray-100 shadow-lg rounded-lg w-6/12 p-3 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            if (showItems) {
              setShowIndex(-1);
            } else {
              setShowIndex(null);
            }
          }}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;

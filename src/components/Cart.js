import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import ItemList from "./ItemList";
const Cart = () => {
  //performance optimization,when we extract item from store
  //only reload page when store.cart.items change ( cart slice only )
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearcart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4">
      {/* andar na content ne text-center kare */}
      <div className="text-center">
        <p className="text-2xl font-bold">cart</p>
        <button
          className=" bg-black text-white p-2 m-2 rounded-lg"
          onClick={clearcart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto bg-gray-100 rounded-lg p-2 my-2 shadow-lg">
        {cartItems.length === 0 && (
          <p className="font-bold text-xl text-center">
            Cart is Empty , Please Enter Some Items
          </p>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;

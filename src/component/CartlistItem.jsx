import { useDispatch } from "react-redux";
import {
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../store/slices/cartSlice.jsx";

const CartlistItem = ({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCartItemQuantity({ productId }));
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      dispatch(decreaseCartItemQuantity({ productId }));
    }
    else{
      removeCartItem({ productId });
    }

  };

  return (
    <div className="bg-white max-w-[350px] w-full rounded-xl shadow-md overflow-hidden p-4 border border-gray-200 hover:shadow-lg transition duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">
          Rating: ⭐{rating?.rate} ({rating?.count} reviews)
        </p>
        <p className="text-gray-700 font-bold text-lg">₹{price}</p>
        <p className="text-gray-700 font-bold text-lg">Quantity: {quantity}</p>

        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={handleDecrease}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            +
          </button>
        </div>

        <button
          className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          onClick={() => dispatch(removeCartItem({ productId }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartlistItem;

import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/slices/cartSlice";
import { addWishlistItem } from "../store/slices/wishListSlice";
const Product = ({productId,title, rating, price, imageUrl }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-[100%] h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">⭐ {rating} / 5</p>
      <p className="text-xl font-bold text-green-600">${price}</p>
      <div className="flex gap-5">
        <button
          className="bg-blue-500 text-white px-3 py-2 mt-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          onClick={() =>
            dispatch(addCartItem({productId, title, rating, price, imageUrl }))
          }
        >
          Cart +
        </button>

        <button
          className="bg-blue-500 text-white px-3 py-2 mt-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          onClick={() =>
            dispatch(addWishlistItem({productId, title, rating, price, imageUrl }))
          }
        >
          WishList +
        </button>
      </div>
    </div>
  );
};

export default Product;

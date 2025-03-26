import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "../component/WishListItem.jsx";

const Wishlist = () => {
  const wishListItems = useSelector((state) => state.wishList);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        My Wishlist
      </h2>
      {wishListItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishListItems.map((wishItem) => (
            <WishListItem key={wishItem.productId} {...wishItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStore } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);

  const cartQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <header className="fixed bg-blue-500 w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center">
          <FaStore className="mr-2" />
          <NavLink to="/">ReduxShop</NavLink>
        </h1>

        {/* Navigation */}
        <nav className="flex space-x-6 text-lg">
          {/* Wishlist */}
          <NavLink to="/wishlist" className="flex flex-col items-center justify-center">
            <p>{wishList.length}</p>
            <FaHeart className="text-3xl" />
          </NavLink>

          {/* Cart */}
          <NavLink to="/cartlist" className="flex flex-col items-center justify-center">
            <p>{cartQuantity}</p>
            <FaShoppingCart className="text-3xl" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

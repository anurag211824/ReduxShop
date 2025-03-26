import React from 'react'
import { removeWishlistItem } from '../store/slices/wishListSlice'
import { useDispatch } from 'react-redux'

const WishListItem = ({ productId, title, rating, price, imageUrl }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeWishlistItem({ productId }));
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 border border-gray-200 hover:shadow-lg transition duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">Rating: ⭐{rating}</p>
                <p className="text-gray-700 font-bold text-lg">₹{price}</p>
                <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default WishListItem


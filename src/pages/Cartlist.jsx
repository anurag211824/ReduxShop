import { useSelector } from "react-redux";
import CartlistItem from "../component/CartlistItem";

const Cartlist = () => {
  const cartItemList = useSelector((state) => state.cartItems);

  const totalPrice = useSelector((state) =>
    state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  return (
    <>
      <div className="text-right mt-28 max-w-[1350px] mx-auto px-4 text-xl font-semibold text-green-600">
        Total Price: ${totalPrice.toFixed(2)}
      </div>

      <div className="max-w-[1350px] mt-6 mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cartItemList.map((cartItem) => {
          const { productId, title, rating, price, imageUrl, quantity } = cartItem;
          const rate = rating?.rate || 0;

          return (
            <CartlistItem
              key={productId}
              productId={productId}
              title={title}
              rating={rate}
              price={price}
              imageUrl={imageUrl}
              quantity={quantity}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cartlist;

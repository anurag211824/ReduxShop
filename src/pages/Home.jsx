import React from "react";
import { useSelector } from "react-redux";
import Product from "../component/Product";

const Home = () => {
  const productList = useSelector((state) => state.products);

  return (
    <div className="max-w-[1350px] mx-auto my-16 px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {productList.map((product) => {
          const { id, title, rating, price, image } = product;
          return (
            <Product
              key={id}
              productId={id}
              title={title}
              rating={rating.rate}
              price={price}
              imageUrl={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

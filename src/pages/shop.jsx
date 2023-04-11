import React, { useState } from "react";
import Categories from "../components/Shop/Categories";
import Checkout from "../components/Shop/checkout/Checkout";
import Card from "../components/Shop/Card";
import { useGetAllProductsQuery } from "../features/slices/ApiSlice";

const Shop = () => {
  const { data = [], error, isLoading } = useGetAllProductsQuery();

  // const [meals, setMeals] = useState(data);
  // const [categories, setCategories] = useState(allCategories);
  console.log(data);
  const filterCategories = () => {};
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="md:p-10 bg-gray-200">
      <div className="flex mt-5">
        <div className="md:w-[85%] md:mr-10">
          <div className="">
            <Categories />
          </div>
          <div className="md:grid md:grid-cols-4 xl:grid-cols-5 md:gap-5  ">
            {data.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Checkout />
      </div>
    </div>
  );
};

export default Shop;

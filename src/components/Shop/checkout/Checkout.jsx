import React from "react";
import Item from "./Item";
import Address from "./Address";

const Checkout = () => {
  return (
    <div className="bg-rose-100/[.5] rounded-md p-5 w-96 border border-rose-300">
      <Address />
      <Item />
    </div>
  );
};

export default Checkout;

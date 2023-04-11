import React from "react";

const Item = () => {
  return (
    <>
      <div className="flex justify-between  border-b border-rose-300 py-4">
        {/* <div className=" h-12 w-12 bg-gray-200 mr-3">
          <img src="" alt="" />
        </div> */}
        <div className=" flex-col">
          <h4 className="font-bold text-lg">Lorem, ipsum dolor sit.</h4>
          <p>Amount: 1</p>
        </div>
        <div className=" w-28 flex-col">
          <h4 className="font-bold text-xl text-right mb-3">$5.45</h4>
          <div className="flex justify-between">
            <button className="btn-md text-2xl leading-3">+</button>
            <input type="text" className="py-1 w-8" />
            <button className="btn-md text-2xl leading-3">-</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b border-rose-300 py-4">
        {/* <div className=" h-12 w-12 bg-gray-200 mr-3">
          <img src="" alt="" />
        </div> */}
        <div className=" flex-col">
          <h4 className="font-bold ">Lorem, ipsum dolor sit.</h4>
          <p>Amount: 1</p>
        </div>
        <div className=" w-28 flex-col">
          <h4 className="font-bold text-xl text-right mb-3">$5.45</h4>
          <div className="flex justify-between">
            <button className="btn-md text-2xl leading-3">+</button>
            <input type="text" className="py-1 w-8" />
            <button className="btn-md text-2xl leading-3">-</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between  border-b border-rose-300 py-4">
        {/* <div className=" h-12 w-12 bg-gray-200 mr-3">
          <img src="" alt="" />
        </div> */}
        <div className=" flex-col">
          <h4 className="font-bold text-lg">Lorem, ipsum dolor sit.</h4>
          <p>Amount: 1</p>
        </div>
        <div className=" w-28 flex-col">
          <h4 className="font-bold text-xl text-right mb-3">$5.45</h4>
          <div className="flex justify-between">
            <button className="btn-md ">+</button>
            <input type="text" className="py-1 w-8" />
            <button className="btn-md text-2xl leading-3">-</button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="flex justify-between">
          <strong>Service</strong> <span>$1.00</span>
        </p>
        <p className="flex justify-between mt-2 mb-3">
          <strong>Total</strong> <span>$1.00</span>
        </p>

        <button className="bg-rose-400 py-2 px-3 w-full font-bold text-white rounded hover:bg-rose-500">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Item;

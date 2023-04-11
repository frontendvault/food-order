import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Address = () => {
  return (
    <div className="bg-gray-400/[.1] p-3 rounded">
      <h3 className="flex text-md font-bold text-gray-800">
        <FaMapMarkerAlt size={20} className="mr-2 " />
        <span>User Address</span>
      </h3>
      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi
        ipsam totam perferendis.
      </p>
      <div className="flex">
        <button className="btn-md">Update Address</button>
      </div>
    </div>
  );
};

export default Address;

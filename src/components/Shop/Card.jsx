import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../../features/slices/CartSlice";

const Card = ({ product }) => {
  const { id, image, name, description, price, rating } = product;
  const dispatch = useDispatch();

  const increaseQuantity = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <>
      {/* {products.map(({ id, image, name, description, price, rating }) => ( */}
      <div className="card " key={id}>
        <img src={image} alt="" className="w-screen h-32" />
        {/* <div className="bg-gray-200 h-36 w-full flex items-center justify-center">
            Image here
          </div> */}
        <h2 className="mt-3 mb-2 text-xl font-bold">{name}</h2>
        <p className="leading-5"> {description.slice(0, 80)}</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex flex-col">
            <span className="text-gray-700 font-bold text-xl mb-3">
              {price}
            </span>
            <span className="flex items-center">
              <FaStar className="text-yellow-500 mr-2" /> {rating}
            </span>
          </div>
          <div>
            <button
              className="btn-md text-2xl h-8 flex items-center justify-center  shadow-lg  shadow-rose-200"
              onClick={increaseQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {/* // ))} */}
    </>
  );
};

export default Card;

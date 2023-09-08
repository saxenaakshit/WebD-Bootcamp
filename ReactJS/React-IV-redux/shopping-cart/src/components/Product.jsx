import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast";
import {add, remove} from "../redux/Slices/cartSlice" 
const Product = ({post}) => {


  const {cart} =useSelector((state)=> state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col justify-between items-center gap-3 p-4 mt-10 ml-5 rounded-xl outline hover:scale-110 transition duration-300 ease-in hover:shadow-md">
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[16px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]" >
        <img className="h-full w-full" src={post.image} alt="not found"/> 
      </div>
    
    <div className="flex gap-12">

    <div>
        <p className="text-green-600 font-semibold items-center w-full ">${post.price}</p>
      </div>
      {
        cart.some((p)=>p.id===post.id) ?
        (<button
           className="text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300"
        onClick={removeFromCart}>
          Remove Item
        </button>):
        (<button 
           className="text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300"
        onClick={addToCart}>
          Add to Cart
        </button>)
      }
    </div>


    </div>
  );
};

export default Product;

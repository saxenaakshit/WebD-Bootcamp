import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";
const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

const removeFromCart = ()=>{
      dispatch(remove(item.id));
      toast.success("Item Removed");
}

  return (
    <div >
      
      
      <div>
       
       
        <div>
    <img src={item.image} alt="not found"/>
        </div>
        <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div
          onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;

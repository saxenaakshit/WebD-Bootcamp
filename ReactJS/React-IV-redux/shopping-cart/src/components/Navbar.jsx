import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-slate-500">
       <NavLink to="/">
       <img src="./logo2"/>
       </NavLink>
       
        <div>
          <NavLink>
          <p>Home</p>
          </NavLink>
          <NavLink>
          <div>
         <FaShoppingCart/>
         </div>
          </NavLink>
       
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

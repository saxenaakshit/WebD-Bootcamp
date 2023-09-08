import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-slate-500">
       <NavLink to="/">
       <img src="../logo.png" alt="not found"/>
       </NavLink>
       
        <div>
          <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
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

import { useContext, useState } from "react";
import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import AuthContext from "../../../context/AuthContext";
import DropDown from "./DropDown";
import CartContext from "../../../context/cartContext";

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="navigation bg-transparent">
      <div className="logo">
        <Link to="/" className="text-orange-600 text-2xl">
          QuickFix
        </Link>
      </div>
      <div>
        <div
          onClick={toggleSidebar}
          className={`links ${
            showSidebar ? "show-sidebar" : ""
          } flex justify-center items-center gap-8`}
        >
          <div className="drop_down">
            <div className="menu-item">
              <span>Services</span>
              <div className="drop_down-content">
                <NavLink to="/bike-services-pkg">Bike</NavLink>
                <NavLink to="/car-services-pkg">Car</NavLink>
              </div>
            </div>
          </div>
          <div className="drop_down">
            <div className="menu-item">
              <Link to="/products">Products</Link>
            </div>
          </div>
          <NavLink to="/About-us">About</NavLink>
          <NavLink to="/Contact-us">Contact Us</NavLink>
          <NavLink
            className=" p-2 rounded hover:bg-orange-600 transition-all duration-200"
            to="/call-service"
          >
            Call for service
          </NavLink>

          <div className="relative">
            <Link to="/cart">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute bottom-4 right-1 font-semibold">
                {cart.length}
              </span>
            </Link>
          </div>

          {user ? (
            <DropDown />
          ) : (
            <Link to="/login" className="mr-4">
              Login
            </Link>
          )}
        </div>

        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div className={`bar ${showSidebar ? "open" : ""}`}></div>
          <div className={`bar ${showSidebar ? "open" : ""}`}></div>
          <div className={`bar ${showSidebar ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

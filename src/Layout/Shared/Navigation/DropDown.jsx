import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const DropDown = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              user.photo ||
              "https://img.freepik.com/free-icon/man_318-233556.jpg"
            }
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black w-52"
      >
        <li>
          <Link className="justify-betwee drop-link">Profiles</Link>
        </li>
        <li>
          <span>Settings</span>
        </li>
        <li>
          <Link to="/bookings" className="drop-link">
            My Booking
          </Link>
        </li>
        <li>
          <Link to="/mycall-service" className="drop-link">
            My Home Service
          </Link>
        </li>
        <li>
          <Link to="/payment-history" className="drop-link">
            Payment History
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="flex items-center gap-1">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;

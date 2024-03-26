import { Nav, NavContainer, Links, Buttons } from "../ui/navContainer";
import { NavLink } from "react-router-dom";
import loginIcon from "../assets/icons/login.svg";
import cartIcon from "../assets/icons/cart.svg";
import likedIcon from "../assets/icons/heart.svg";

const Navbar = () => {
  const isActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <Nav>
      <NavContainer>
        <div>
          <h2>RentDrobe</h2>
        </div>

        <Links>
          <NavLink to="/" className={isActiveClass}>
            Home
          </NavLink>
          <NavLink to="/store" className={isActiveClass}>
            Store
          </NavLink>
          <NavLink to="/contact" className={isActiveClass}>
            Contact
          </NavLink>
        </Links>

        <Buttons>
          <button>
            <img src={likedIcon} alt="" />
          </button>
          <button>
            <img src={loginIcon} alt="" />
          </button>
          <button>
            <img src={cartIcon} alt="" />
          </button>
        </Buttons>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

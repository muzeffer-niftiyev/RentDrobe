import styled from "styled-components";
import { NavLink } from "react-router-dom";
import loginIcon from "../assets/icons/login.svg";
import cartIcon from "../assets/icons/cart.svg";
import likedIcon from "../assets/icons/heart.svg";

const Nav = styled.nav`
  position: fixed;
  z-index: 11111111;
  width: 100%;
  height: 80px;
  background-color: #fff;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  & div {
    display: flex;
  }

  & h2 {
    font-size: 32px;
    color: #333;
    font-family: "Shadows Into Light", cursive;
  }
`;

const Links = styled.div`
  gap: 25px;

  & a {
    font-size: 19px;
    color: #333;
  }

  & a.active {
    color: #f1ac3d;
  }
`;

const Buttons = styled.div`
  gap: 20px;

  & button {
    width: 25px;
    height: 25px;
    background-color: inherit;
    border: none;

    outline: none;
  }

  & img {
    width: 100%;
  }
`;

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
          <NavLink to="/about" className={isActiveClass}>
            About
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

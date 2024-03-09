import styled from "styled-components";
import { NavLink } from "react-router-dom";
import loginIcon from "../assets/icons/login.svg";
import cartIcon from "../assets/icons/cart.svg";
import likedIcon from "../assets/icons/heart.svg";

const Nav = styled.nav`
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

const LinksDiv = styled.div`
  gap: 25px;

  & a {
    font-size: 19px;
    color: #333;
  }

  & a.active {
    color: #f1ac3d;
  }
`;

const Div = styled.div`
  gap: 20px;

  & button{
    width: 25px;
    height: 25px;
    background-color: inherit;
    border: none;

    outline: none;
  }

  & img{
    width: 100%;
  }
`;

const Navbar = () => {
  const isActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <Nav>
      <div>
        <h2>RentDrobe</h2>
      </div>

      <LinksDiv>
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
      </LinksDiv>

      <Div>
        <button>
          <img src={likedIcon} alt="" />
        </button>
        <button>
          <img src={loginIcon} alt="" />
        </button>
        <button>
          <img src={cartIcon} alt="" />
        </button>
      </Div>
    </Nav>
  );
};

export default Navbar;

import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  z-index: 11111111;
  width: 100%;
  height: 80px;
  background-color: #fff;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  div {
    display: flex;
  }

  h2 {
    font-size: 32px;
    color: #333;
    font-family: "Shadows Into Light", cursive;
  }
`;

export const Links = styled.div`
  gap: 25px;

  a {
    font-size: 19px;
    color: #333;
  }

  a.active {
    color: #f1ac3d;
  }
`;

export const Buttons = styled.div`
  gap: 20px;

  button {
    width: 25px;
    height: 25px;
    background-color: inherit;
    border: none;

    outline: none;
  }

  img {
    width: 100%;
  }
`;

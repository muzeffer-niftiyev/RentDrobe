import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
export const H1 = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: calc(100vh - 88px);
  padding-left: 80px;
  padding-bottom: 120px;
  font-size: 80px;
  z-index: 111111;
  color: #fff;
  transition: all 1s;

  & span {
    text-align: left;
    color: #b8b1b1;
  }

  & button {
    font-size: 22px;
    border: 3px solid #eee;
    color: #eee;
    background-color: inherit;
    margin-top: 15px;
    border-radius: 6px;
    padding: 10px 30px;
  }

  & button:hover {
    border: 3px solid transparent;
    background-color: #d69327;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.45);
    z-index: -1;
  }
`;

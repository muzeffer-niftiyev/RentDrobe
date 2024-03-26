import styled from "styled-components";

export const ServicesList = styled.div`
  margin: 50px auto;
  display: flex;
  gap: 60px;
  width: 70%;

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: auto;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 9px;
    padding: 15px;
    min-width: 300px;

    img {
      width: 70px;
    }

    span {
      font-size: 20px;
    }
  }
`;

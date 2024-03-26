import styled from "styled-components";

export const MissionCont = styled.div`
  width: 55%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const MissionItem = styled.div`
  border: 3px solid #f1ac3d;
  border-radius: 25px;
  height: 30%;
  display: flex;
  background-color: #fff;

  * {
    color: #1d1d1b;
  }

  div {
    flex: 1;
  }

  h3 {
    font-size: 36px;
  }

  p {
    font-size: 19px;
    margin-top: 15px;
    line-height: 1.3;
    max-width: 80%;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    object-fit: center;
  }

  div:first-child {
    padding: 30px 40px;
  }
`;

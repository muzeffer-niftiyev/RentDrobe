import styled from "styled-components";
import missionData from "../data/missionData";

const MissionCont = styled.section`
  display: flex;
  margin: auto;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdeedc;

  h2 {
    font-size: 45px;
    color: #1d1d1b;
  }

  & > div {
    width: 60%;
    height: 120vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

const MissionItem = styled.div`
  border: 3px solid #f1ac3d;
  border-radius: 25px;
  height: 30%;
  display: flex;
  background-color: #fff;

  & * {
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

const OurMissionSection = () => {
  return (
    <MissionCont>
      <h2>Our Mission</h2>

      <div>
        {missionData.map((item) => {
          return (
            <MissionItem key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
              <div>
                <img src={item.imgUrl} alt="" />
              </div>
            </MissionItem>
          );
        })}
      </div>
    </MissionCont>
  );
};

export default OurMissionSection;

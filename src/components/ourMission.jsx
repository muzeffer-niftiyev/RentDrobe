import {MissionCont, MissionItem} from '../ui/missionContainer';
import { SectionHeader } from '../ui/sectionHeaders';
import missionData from "../data/missionData";
import { SectionCont } from '../ui/sectionCont';

const OurMission = () => {
  return (
    <SectionCont>
      <SectionHeader>Our Mission</SectionHeader>

      <MissionCont>
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
      </MissionCont>
    </SectionCont>
  );
};

export default OurMission;

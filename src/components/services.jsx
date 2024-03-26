import { SectionHeader } from "../ui/sectionHeaders";
import { ServicesCont } from "../ui/sectionCont";
import { ServicesList } from "../ui/servicesList";
import cameraIcon from "../assets/icons/camera.svg";
import deliveryIcon from "../assets/icons/delivery.svg";
import cleaningIcon from "../assets/icons/cleaning.svg";

const Services = () => {
  return (
    <ServicesCont>
      <SectionHeader>Services</SectionHeader>
      <ServicesList>
        <div>
          <img src={cleaningIcon} alt="" />
          <span>Free Dry Cleaning</span>
        </div>

        <div>
          <img src={cameraIcon} alt="" />
          <span>Opportunity to try on</span>
        </div>

        <div>
          <img src={deliveryIcon} alt="" />
          <span>Free Courier</span>
        </div>
      </ServicesList>
    </ServicesCont>
  );
};

export default Services;

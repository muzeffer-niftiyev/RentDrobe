import { H1 } from "../ui/homeHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeImg } from "../redux/features/homeImgSlider";

import { NavLink } from "react-router-dom";
import img1 from "../assets/imgs/home-1.jpg";
import img2 from "../assets/imgs/home-2.jpg";
import img3 from "../assets/imgs/home-3.jpg";

const imgArr = [img1, img2, img3];

const HomeHeader = () => {
  const imgNum = useSelector((state) => state.slider.imgNum);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(changeImg());
    }, 2500);

    return () => clearInterval(interval);
  });

  return (
    <H1 style={{ background: `url(${imgArr[imgNum - 1]}) no-repeat` }}>
      <span>GET YOURSELF</span>
      <p>INTO THE RIGHT GEAR</p>

      <button>
        <NavLink to="/store">Shop Now</NavLink>
      </button>
    </H1>
  );
};

export default HomeHeader;

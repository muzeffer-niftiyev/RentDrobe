import { configureStore } from "@reduxjs/toolkit";
import { sliderSlice } from "./features/homeImgSlider";

export default configureStore({
  reducer: {
    slider: sliderSlice.reducer,
  },
});

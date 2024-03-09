import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    imgNum: 1,
  },
  reducers: {
    changeImg: (state) => {
      state.imgNum === 3 ? (state.imgNum = 1) : (state.imgNum += 1);
    },
  },
});

export const {changeImg} = sliderSlice.actions;
export default sliderSlice.reducer;

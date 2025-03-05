import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
  name: "base",
  initialState: {
    modal: false,
    mobile: false,
  },
  reducers: {
    toggleModal(state) {
      state.modal = !state.modal;
    },
    setMobile(state, action) {
      state.mobile = action.payload;
    },
  },
});

export const { setMobile, toggleModal } = baseSlice.actions;
export default baseSlice.reducer;

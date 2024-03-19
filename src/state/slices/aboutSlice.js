// aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  filteredData: [],
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setData, setFilteredData } = aboutSlice.actions;
export default aboutSlice.reducer;

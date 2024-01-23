import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ScreenState {
  name: string;
  id: number | null;
}

const initialState: ScreenState = { name: "home", id: null };

const screenSlice = createSlice({
  name: "screens",
  initialState: initialState,
  reducers: {
    SET_SCREEN: (
      state,
      action: PayloadAction<{ name: string; id: number }>
    ) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
  },
});

export const { SET_SCREEN } = screenSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectScreenName = (state: RootState) => state.screens.name;
export const selectScreenID = (state: RootState) => state.screens.id;

export default screenSlice.reducer;

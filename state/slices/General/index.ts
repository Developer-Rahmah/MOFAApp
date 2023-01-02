import { Route } from "@react-navigation/native";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../";
import { sliceNames } from "../../constants";

// type checking.
export interface GeneralState {
  currentNavigationFocsedScreen: Route<string> | undefined;
}

// initial general state.
const initialState: GeneralState = {
  currentNavigationFocsedScreen: undefined,
};

// create general slice.
const generalSlice = createSlice({
  name: sliceNames.GENERAL,
  initialState,
  reducers: {
    updateCurrentRoute: (state, action: { payload: Route<string> }) => {
      state.currentNavigationFocsedScreen = action.payload;
    },
  },
});

// grap nedded actions.
export const { updateCurrentRoute } = generalSlice.actions;

// use selector shorthand
export const generalSelector = (state: RootState) => state.general;

// export reducer as default.
export default generalSlice.reducer;

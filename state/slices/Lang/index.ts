import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../";
import { sliceNames } from "../../constants";
export interface LangState {
  lang: string;
}
const initialState: LangState = {
  lang: "",
};

const langSlice = createSlice({
  name: sliceNames.LANG,
  initialState,
  reducers: {
    updateLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

// grab needed actions.
export const { updateLang } = langSlice.actions;

// use selector shorthand
export const langSelector = (state: RootState) => state.lang;

// export default.
export default langSlice.reducer;

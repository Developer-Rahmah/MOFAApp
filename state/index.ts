import { configureStore } from "@reduxjs/toolkit";

// import reducers.
import auth, { AuthState } from "./slices/AuthSlice";
import general, { GeneralState } from "./slices/General";
import lang, { LangState } from "./slices/Lang";

// type checking.
export interface RootState {
  auth: AuthState;
  lang: LangState;
  general: GeneralState;
}

// create store.
const store = configureStore({
  reducer: {
    auth,
    lang,
    general,
  },
});

// export store as default.
export default store;

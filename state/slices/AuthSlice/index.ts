import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../';
import { sliceNames } from '../../constants';
export interface AuthState {
  user: any;
}
const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: sliceNames.AUTH,
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateAccessToken: (state, action: { payload: string }) => {},
  },
});

// grab needed actions.
export const { updateUser, updateAccessToken } = authSlice.actions;

// use selector shorthand
export const authSelector = (state: RootState) => state.auth;

// export default.
export default authSlice.reducer;

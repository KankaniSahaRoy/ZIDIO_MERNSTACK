import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setUser, setError } = authSlice.actions;
export default authSlice.reducer;

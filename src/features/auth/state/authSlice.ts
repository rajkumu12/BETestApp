import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
}

interface AuthState {
  user: User | null;
  hasSeenOnboarding: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  hasSeenOnboarding: false,
  isLoading: true, // used for splash
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setOnboardingSeen(state) {
      state.hasSeenOnboarding = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { login, logout, setOnboardingSeen, finishLoading } = authSlice.actions;

export default authSlice.reducer;

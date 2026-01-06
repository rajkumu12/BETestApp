import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
}

interface AuthState {
  user: User | null;
  hasSeenOnboarding: boolean;
  language: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  hasSeenOnboarding: false,
  language: null,          
  isLoading: true,
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
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
});
export const { login, logout, setOnboardingSeen, finishLoading,setLanguage } = authSlice.actions;

export default authSlice.reducer;

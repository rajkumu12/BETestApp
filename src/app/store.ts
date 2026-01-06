import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/state/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

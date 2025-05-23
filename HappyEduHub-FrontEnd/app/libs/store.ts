import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const makeStore = () => {
  return store;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

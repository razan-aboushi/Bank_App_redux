import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../reducers";

// Load the state from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Create the store with the persisted state
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

// Save the state to localStorage whenever it changes
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;

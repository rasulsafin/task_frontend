import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers';

const store = configureStore(userReducer);

export default store;

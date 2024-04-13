import {configureStore} from '@reduxjs/toolkit';
import TodoSlice from '../Features/todo/TodoSlice';

export const store = configureStore({
  reducer: TodoSlice
});
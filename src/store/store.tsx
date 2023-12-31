import {  Action,ThunkAction, configureStore } from "@reduxjs/toolkit";
import {reducer} from './slice/index';

export const store = configureStore({reducer, devTools:true});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction <
  ReturnType,
  RootState,
  unknown,
  Action <string>
>;
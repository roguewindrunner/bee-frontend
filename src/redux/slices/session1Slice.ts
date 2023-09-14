import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Session1DataInterface {}

const initialState: Session1DataInterface = {};

export const session1DataSlice = createSlice({
	name: "session1",
	initialState,
	reducers: {},
});

export const { } = session1DataSlice.actions;

export default combineReducers({
	data: session1DataSlice.reducer,

})
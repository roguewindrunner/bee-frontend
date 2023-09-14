import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppDataInterface {
	
}

const initialState: AppDataInterface = {
	
};

export const appDataSlice = createSlice({
	name: "appData",
	initialState,
	reducers: {
		
	},
});

export const { } = appDataSlice.actions;

export default appDataSlice.reducer;

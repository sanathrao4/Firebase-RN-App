import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { images } from "../../images";

const initialState = {
    planList: [],
}





const plannedTaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addToPlan: (state, action) => {

            let temp = [...state.planList, action.payload]
            state.planList = temp
            console.log('state', state.planList)
        },
        removeFromPlan: (state, action) => {
            state.planList = [...action.payload]
        },
        clearAll: (state, action) => {

        }
    },
})


export const { addToPlan } = plannedTaskSlice.actions




export default plannedTaskSlice.reducer
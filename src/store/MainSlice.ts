import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type IMainSlider = {
    id: number,
    src: string,
    href: string,
    title: string,
    subtitle: string,
    description: string
}

type IMainPresentState = {
    status: null | string,
    mainPresentArray: IMainSlider[]
}

const initialState:IMainPresentState = {
    status: null,
    mainPresentArray: []
}

export const fetchMainPresent = createAsyncThunk<IMainSlider[], void, {rejectValue: string}>(
    "fetchMainPresent",
    async (_, {rejectWithValue}) => {
            try {
                const response = await axios.get("./JSON/mainPresentSlide.json");
                return response.data;
            } catch (error: any) {
                rejectWithValue(error.message)
            }
    }
)

export const mainPresent = createSlice({
    name: "mainPresent",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMainPresent.pending, state => {
                state.status = "pending";
            })
            .addCase(fetchMainPresent.fulfilled, (state, action) => {
                state.status = "successfully";
                state.mainPresentArray = action.payload;
            })
    }
})

export default mainPresent.reducer;
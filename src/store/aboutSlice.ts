import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type IAboutContent = {
    id: number,
    text: string
}

type IAboutState = {
    status: null | string,
    aboutContent: IAboutContent[]
}

const initialState:IAboutState = {
    status: null,
    aboutContent: []
}

export const fetchAboutContent = createAsyncThunk<IAboutContent[], void, {rejectValue: string}>(
    "aboutSlice/fetchAboutContent",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("./JSON/about.json");
            return response.data;
        } catch (error:any) {
            rejectWithValue(error.message);
        }
    }
)

export const aboutSlice = createSlice({
    name: "aboutSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAboutContent.pending, state => {
                state.status = "pending";
            })
            .addCase(fetchAboutContent.fulfilled, (state, action) => {
                state.status = "successfully";
                state.aboutContent = action.payload;
            })
    }
})

export default aboutSlice.reducer;
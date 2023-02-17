import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type IAdvantage = {
    id: number,
    src: string,
    title: string,
    description: string
}

type IAdvantageState = {
    status: null | string,
    advantageArray: IAdvantage[]
}

const initialState:IAdvantageState = {
    status: null,
    advantageArray: []
}

export const fetchAdvantage = createAsyncThunk<IAdvantage[], void, {rejectValue: string}>(
    "advantage/fetchAdvantage",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("./JSON/advantage.json");
            return response.data;
        } catch (error:any) {
            rejectWithValue(error.message);
        }
    }
)

export const AdvantageSlice = createSlice({
    name: "advantage",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAdvantage.pending, state => {
                state.status = "pending";
            })
            .addCase(fetchAdvantage.fulfilled, (state, action) => {
                state.status = "successfully";
                state.advantageArray = action.payload;
            })
    }
})

export default AdvantageSlice.reducer;
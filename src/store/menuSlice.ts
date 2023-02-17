import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type IMenu = {
    id: number,
    href: string,
    title: string
}

type IProductState = {
    menu: IMenu[],
    footerMenu: IMenu[],
    productMenu: IMenu[],
    status: null | string
}

const initialState: IProductState = {
    menu: [],
    footerMenu: [],
    productMenu: [],
    status: null
}

export const fetchMenuSlice = createAsyncThunk<IMenu[], void, { rejectValue: string }>(
    'menu/fetchMenu',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("./JSON/Menu/Menu.json");
            return response.data;
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
)
export const fetchProductMenu = createAsyncThunk<IMenu[], void, {rejectValue: string}>(
    'menu/fetchProductMenu',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("./JSON/Menu/productMenu.json");
            return response.data;
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
)

export const MenuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMenuSlice.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMenuSlice.fulfilled, (state, action) => {
                state.status = "successfully";
                state.menu = action.payload;
                state.footerMenu = action.payload.filter((item, i) => i > 0);
            })
            .addCase(fetchProductMenu.pending, state => {
                state.status = "loading";
            })
            .addCase(fetchProductMenu.fulfilled, (state, action) => {
                state.status = "successfully";
                state.productMenu = action.payload;
            })
    }
})

export default MenuSlice.reducer;

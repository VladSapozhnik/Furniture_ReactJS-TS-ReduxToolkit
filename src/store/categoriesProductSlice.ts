import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from 'axios';


type IProduct = {
    id: number,
    src: string,
    isNew: boolean,
    isStock: boolean,
    isHitSale: boolean,
    title: string,
    price: number,
    stockPrice: number | null
}

type ICategoriesSelect = {
    id: number,
    src: string,
    title: string,
    name: string
}

type IProductState = {
    productArray: IProduct[],
    productSelect: ICategoriesSelect[],
    status: null | string
}

const initialState: IProductState = {
    productArray: [],
    productSelect: [],
    status: null
}

export const fetchCategoriesProduct = createAsyncThunk<IProduct[], string, {rejectValue: string}>(
    'product/fetchProduct',
    async (categoryProduct = "sofas", {rejectWithValue}) => {
        try {
            const response = await axios.get(`./JSON/Categories/CategoriesProduct/${categoryProduct}.json`);
            return response.data;
        } catch (error: any) {
            rejectWithValue(error.message)
        }
    }
)

export const fetchCategoriesSelect = createAsyncThunk<ICategoriesSelect[], void, {rejectValue: string}>(
    'product/fetchSelect',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get("./JSON/Categories/CategoriesSelect.json");
            return response.data;
        } catch (error: any) {
            rejectWithValue(error.message)
        }
    }
);

export const CategoriesProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategoriesProduct.fulfilled, (state, action:PayloadAction<IProduct[]>) => {
                state.status = "resolved";
                state.productArray = action.payload;
            })
            .addCase(fetchCategoriesSelect.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategoriesSelect.fulfilled, (state, action) => {
                state.status = "resolved";
                state.productSelect = action.payload;
            })
    }
})

// export const productArray = (state) => state.categoriesProduct.productArray;

export default CategoriesProductSlice.reducer;
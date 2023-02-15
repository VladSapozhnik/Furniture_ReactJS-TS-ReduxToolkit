import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


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

type IProductState = {
    productArray: IProduct[],
    status: null | string
}

const initialState: IProductState = {
    productArray: [],
    status: null
}

export const fetchCategoriesProduct = createAsyncThunk<IProduct[], string, {rejectValue: string}>(
    'product/fetchProduct',
    async function (categoryProduct = "sofas", {rejectWithValue}) {
        try {
            const response = await fetch(`./JSON/Categories/CategoriesProduct/${categoryProduct}.json`);
            return response.json()
        } catch (error: any) {
            rejectWithValue(error.message)
        }
    }
)
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
    }
})

// export const productArray = (state) => state.categoriesProduct.productArray;

export default CategoriesProductSlice.reducer;
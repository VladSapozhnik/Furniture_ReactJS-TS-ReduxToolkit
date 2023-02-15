import { configureStore } from '@reduxjs/toolkit';
import categoriesProductSlice from "./categoriesProductSlice";
const store = configureStore({
    reducer: {
        categoriesProduct: categoriesProductSlice,
        // assortment: assortment,
        // advantage: advantage,
        // navigate: navigate
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
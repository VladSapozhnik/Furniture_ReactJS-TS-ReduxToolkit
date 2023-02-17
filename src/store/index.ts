import { configureStore } from '@reduxjs/toolkit';
import categoriesProductSlice from "./categoriesProductSlice";
import menuSlice from "./menuSlice";
import advantageSlice from "./AdvantageSlice";
import mainPresent from "./MainSlice";
import aboutContent from "./aboutSlice";

const store = configureStore({
    reducer: {
        categoriesProduct: categoriesProductSlice,
        menu: menuSlice,
        advantage: advantageSlice,
        mainPresent,
        aboutContent
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
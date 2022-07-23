import { configureStore, } from "@reduxjs/toolkit";
import { dogBreedsApi } from "./services/dogBreeds";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [dogBreedsApi.reducerPath]: dogBreedsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dogBreedsApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch)
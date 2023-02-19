import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "./slice"


export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

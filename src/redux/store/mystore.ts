import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../slice/UserSlice'

const mystore = configureStore({
    reducer: UserReducer
})

export default mystore;
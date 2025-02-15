import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from '../slice/UserSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/lib/persistStore";

const rootReducer = combineReducers({
    users: UserReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const mystore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

const persistedStore = persistStore(mystore)

export { mystore, persistedStore };
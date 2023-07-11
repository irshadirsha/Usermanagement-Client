import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './user/userSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 import adminReducer from './admin/adminSlice'
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, userReducer)
const persistedAdminReducer = persistReducer(persistConfig, adminReducer)

export const Store =configureStore({
    reducer:{
        user:persistedReducer,
        admin:persistedAdminReducer
    }
})
export const persistor = persistStore(Store)
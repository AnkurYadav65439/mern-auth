import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });  //combine all reducers into single unit

//for local storage
const persistConfig = {
    key: 'root',   //name of data goint to store in local st.
    version: 1,   //def. -1
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMidlleware) => getDefaultMidlleware({
        serializableCheck: false,    //to prevent some err on using redux//
    })
});

//persist store means it store in local st.
export const persistor = persistStore(store); 
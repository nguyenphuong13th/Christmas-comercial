
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import cartlistReducerSlice from './cartListReducerSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducerSlice from './productReducerSlice'

const persistConfig = {
  key: 'root',
  version:1,
  storage,
}

const reducer = combineReducers({
  cartList:cartlistReducerSlice,
  ProductShopList:productReducerSlice
})
const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
  reducer: persistedReducer
})

export default store
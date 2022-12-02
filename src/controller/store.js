
import { configureStore } from '@reduxjs/toolkit'
import cartlistReducerSlice from './cartListReducerSlice'

const store = configureStore({
  reducer: {
    cartList:cartlistReducerSlice
  },
})

export default store
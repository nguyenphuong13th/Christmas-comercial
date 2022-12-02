
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart:[]
}
const cartlistReducerSlice = createSlice({
    name:"addCartList",
    initialState,
    reducers:{
        addCart:(state,action)=>{
            state.cart.push(action.payload)
        }
    }
})
export const {addCart} = cartlistReducerSlice.actions
export default cartlistReducerSlice.reducer;
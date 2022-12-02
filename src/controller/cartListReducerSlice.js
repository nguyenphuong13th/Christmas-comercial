// import { ADD_CART } from "./action-types"

// const initialState = {
//     cart :[0],

// }

// export const cartReducer =(state = initialState ,action)=>{
//     switch (action.type) {
//         case ADD_CART:
//         return{
//             ...state,
//             cart : [...state.cart,action.payload]
//         }
//         default:
//             return state
//     }
// }

// import { createSlice } from "@reduxjs/toolkit";
// export const cartlistReducerSlice = createSlice({
//     name:'addCartList',
//     initialState:
//      [],
//     reducers:{
//         addCart:(state,action)=>{
//             state.push(action.payload)
//         },

//     }


// })
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart:[],
    quantity:0
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
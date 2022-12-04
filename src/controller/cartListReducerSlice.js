
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart:[]
}
const cartlistReducerSlice = createSlice({
    name:"CartList",
    initialState,
    reducers:{
        addCart:(state,action)=>{
            // Find the element in cart which have the same id as the selected item return the first index of the match item in cart.
            const itemIndex = state.cart.findIndex((itemIndex)=> itemIndex.id === action.payload.id)

            // if have 1 selected item the quantity of the item in cart will increase by 1
            if(itemIndex >= 0 ){
                state.cart[itemIndex].qty += 1
            }else{
                // In case cannot find an similar item in cart add the selected item as the new item with quantity is 1
                const temp = {...action.payload,qty : 1}
                state.cart.push(temp)
            }

        },
        removeCart :(state,action) =>{
            //ID of an item have put in cart dispatched by an onClick on delete symbol
            const itemID = action.payload
            // if dispatched ID match with ID of item in cart then we do not show that item
            state.cart = state.cart.filter((element)=> element.id !== itemID)

        }

    }
})
export const {addCart,removeCart} = cartlistReducerSlice.actions
export default cartlistReducerSlice.reducer;
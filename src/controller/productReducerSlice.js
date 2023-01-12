
import { createSlice } from "@reduxjs/toolkit";
import { products } from 'components/assets/data/data'
const initialState = {
    productShop:products
}
console.log(initialState)
const productReducerSlice = createSlice({
    name:"ProductShopList",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
                const temp = {...action.payload}
                state.productShop.push(temp)
            }

        }
})
        // removeCart :(state,action) =>{
        //     //ID of an item have put in cart dispatched by an onClick on delete symbol
        //     const itemID = action.payload
        //     // if dispatched ID match with ID of item in cart then we do not show that item
        //     state.cart = state.cart.filter((element)=> element.id !== itemID)

        // },

        // removeItem: (state,action)=>{
        //     const itemIndex_desc = state.cart.findIndex((itemIndex)=> itemIndex.id === action.payload.id)
        //     if(state.cart[itemIndex_desc].qty >= 1){
        //         state.cart[itemIndex_desc].qty -= 1
        //     }else if (state.cart[itemIndex_desc].qty < 2){
        //             const itemDetailID = action.payload.id
        //              state.cart = state.cart.filter((el)=>el.id !== itemDetailID)

        //         }
        // }



export const {addProduct} = productReducerSlice.actions
export default productReducerSlice.reducer;
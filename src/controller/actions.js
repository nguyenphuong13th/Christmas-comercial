import { ADD_CART } from "./action-types"

export const ADD = (item) => {
    return{
        type :ADD_CART,
        payload:item
    }
}
import { CART_ADD, CART_REMOVE } from "./actionType"

const cartReducer = (state = [], action)=>{

    switch(action.type){
        case CART_ADD:
          
            return [...state, action.product]

        case CART_REMOVE:
            const removed = state.filter((item)=> item !== action.product)
            return removed

        default: 
            return state
    }

}

export default cartReducer
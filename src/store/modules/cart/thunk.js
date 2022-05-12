import { addToCart, removeToCart } from "./action";

export const addToCartThunk = (product) => (dispatch) =>{

        dispatch(addToCart(product))
  
}


export const removeToCartThunk = (product) => (dispatch) => {
    dispatch(removeToCart(product))


}
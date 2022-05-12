import { CART_ADD, CART_REMOVE } from "./actionType";

export const addToCart = (product) => ({
    type: CART_ADD,
    product
    
    })

export const removeToCart = (product)=>({
    type: CART_REMOVE,
    product


})
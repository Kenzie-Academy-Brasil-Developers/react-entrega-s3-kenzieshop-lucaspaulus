import React, { useEffect, useState } from 'react';
import * as S from "./style.js"
import formatValue from '../../utils/formatValue.js';

import { addToCartThunk } from '../../store/modules/cart/thunk.js';
import { useDispatch, useSelector } from 'react-redux';

function Card({item}){
    const {id,img, name, price} = item 
    const {cart} = useSelector((state)=>state)
    const {products} = useSelector((state)=> state)

    const dispatch = useDispatch()

    function add(id){
        const item = products.find((productItem)=> productItem.id === id)
        
        const isProductAdd = cart.some((product)=> product.id === item.id)
 
        if(!isProductAdd){
            dispatch(addToCartThunk(item))
        }
      
        
    }
    return (
        <S.Container>
            <S.ImgContainer>
                <img src={img}/>
            </S.ImgContainer>

            <S.InfoProducts>
                <h3>{name}</h3>
                <p><span>por </span>{formatValue(price)}</p>
            </S.InfoProducts>

            <button onClick={()=>add(id)}>Adcionar ao Carrinho</button>
            
        </S.Container>
               
    )
}

export default Card

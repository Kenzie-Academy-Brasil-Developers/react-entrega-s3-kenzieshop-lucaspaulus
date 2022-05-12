import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';
import * as S from "./style.js"

function Main() {
    const {products} = useSelector((state)=> state)
 
    return (
        <S.Main>
            {  
                products.map((item)=>(
                    <Card key={item.id} item={item} addProductToCart={item}/>
                ))
            }
        </S.Main>
    ) 
}

export default Main;

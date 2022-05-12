import React from 'react';
import * as S from "./style.js"
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CarrinhoIcon } from '../../assets/carrinho.svg'


import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const history = useHistory()
    const { cart } = useSelector((state) => state)

    return (
        <S.Header>
            <Logo onClick={() => history.push("/")} />
            <S.User>
                <S.CarrinhoContainer onClick={() => history.push("/cart")}>
                    <CarrinhoIcon />

                    {cart.length > 0 && <span>{cart.length}</span>}


                </S.CarrinhoContainer>

                <p>ENTRAR</p>
            </S.User>
        </S.Header>
    )
}

export default Header;

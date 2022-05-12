import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import formatValue from "../../utils/formatValue.js"

import { removeToCartThunk } from "../../store/modules/cart/thunk.js"


function Cart(){
    const {cart} = useSelector((state)=> state)

    const dispatch = useDispatch()

    function remove(product){
        
        dispatch(removeToCartThunk(product))
      
      
    }
    return(
        <S.Container>
            <S.CartLeftCol>
                <div className="header">
                    <h1>Carrinho</h1>
                </div>


                <div className="body">
                    {
                        cart.length > 0
                    
                        ?
                        
                        cart.map((product, index)=>(
                            <div className="card" key={index}>
                                  
                               
                                <div className="details">
                                    <img src={product.img} alt="imagem do produto"/>
                                    <p>{product.name}</p>
                                </div>
                                
                                <p>{formatValue(product.price)}</p>
                                <p  onClick={()=> remove(product)} className="remove"> Remover (-) </p>
                              
                            </div>

                        ))
                        :
                        
                        <p className="emptyCart">Carrinho Vazio</p>
                        
                    
                    }

                </div>
            </S.CartLeftCol>
                
            <S.CartRightCol>
                <div className="header">
                    <p>Resumo do Pedido</p>
                </div>

                <div className="body">
                    <div className="TotalContainer">
                        <p>TOTAL:</p>
                        <p>
                            {
                                formatValue(cart.reduce((acc, item)=> acc + item.price,0))
                        
                            }
                        </p>

                    </div>
                </div>

                <button>Finalizar Pedido</button>
            </S.CartRightCol>
        </S.Container>
        

    )
}

export default Cart
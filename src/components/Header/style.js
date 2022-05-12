import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 70px;
    background-color: #0a1405;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    padding: 0 25px;
    box-sizing: border-box;
    border-bottom: 2px solid #009245;
    justify-content: space-between;

    svg{
        width: 200px;
        cursor: pointer;
    }
 

`

export const User = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 90px;
    align-items: center;
 
    p{
        color: #afffba;
 
        font-size: 12px;
        cursor: pointer;

        &:hover{
            color: #009245;
        }
    }

     
`


export const CarrinhoContainer = styled.div`
    position: relative;
    cursor: pointer;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
       
        position: absolute;
        top: -2px;
        right: 3px;
        width: 18px;
        height: 18px;
        border-radius: 50px;

        color: #0a1405;
        background-color: #39b54a;
        font-size: 12px;
        font-weight: 900;
        font-size: 16px;
        font-family: sans-serif;
        
    }

    svg{
        width: 100%;
        fill: #afffba;
          
    }

    &:hover{
                span{
                    background-color: #009245;
                }

                svg{
                    fill: #009245;
                }

            }

   
`
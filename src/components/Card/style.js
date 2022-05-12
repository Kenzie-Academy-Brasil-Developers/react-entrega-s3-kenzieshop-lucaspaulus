import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 280px;
    box-shadow: 1px 1px 1px 1px #d9d9d94f, -1px -1px 1px 1px #d9d9d94f;
    margin: 0 15px 30px 15px;
    background-color: white;
    border-radius: 4px;
    img{
        width: 100%;
        height: 100%;
        max-height: 400px;
        box-sizing: border-box;
        object-fit: scale-down;
        object-position: center;
 
    }

    h3{
        font-weight: 400;
        font-size: 18px;
        margin: 0 0 10px 0;
    }

    p{
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 30px;
        font-family: sans-serif;
    }

    span{
        font-weight: 700;
    }
    button{
        background-color: #009245;
        color: white;
        width: 100%;
        height: 45px;
        max-width: 190px;
        font-family: "Nobile",sans-serif;
        border: none;
        padding: 0 10px;
        border-radius: 50px;
        margin-bottom: 20px;
        font-size: 16px;

        &:hover{
            background-color: #39b54a
        }
    }

`

export const ImgContainer = styled.div`
    height: 400px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    

`

export const InfoProducts = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid #00800038;
    padding: 15px 0 0 15px;


`
import styled from "styled-components";


export const Container = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 50px;
   
    margin: 60px 0px 15px 0;

    h1{
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        color: #009245;
        margin-top: 15px;
    }
    p{
        font-size: 16px;
        margin-top: 15px;
        font-weight: 500;
        color: #39b54a;
    }
    svg{
        fill: #009245;
    }
`
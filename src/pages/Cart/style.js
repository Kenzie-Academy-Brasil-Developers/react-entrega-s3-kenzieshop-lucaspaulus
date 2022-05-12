import styled from "styled-components";
 

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;


`
export const CartLeftCol = styled.div`
    width: 100%;
    max-width: 800px;
    background-color: #ffffff;
    padding: 0 40px 0 25px;
    border-radius: 10px 0 0 10px;
    
    .header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 70px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        color: #39b54a;
        font-size: 18px;
    }

    .body{
        .emptyCart{
            margin-top: 15px;
            font-family: "Inter", sans-serif;
        }
        .card{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 160px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
            font-family: "Inter", sans-serif;
            .remove{
                font-size: 14px;
                cursor: pointer;
            }
            .details{
                display: flex;
                align-items: center;
                width: 200px;
                p{
                    margin-left: 15px;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.8px;
                    
                }    
            }
        }

        img{
            width: 100px;
            height: 100px;
            background-color: #f5f0f0;
            border-radius: 15px;
        }
    }



`
export const CartRightCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 275px;
    height: 230px;
    padding: 0 25px;
    background-color: #0A1405;
    color: white;
    border-radius: 0px 10px 10px 0;
    
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        font-size: 18px;
        font-family: "Inter", sans-serif;
    }

    .body{
        display: flex;
        justify-content: center;
        
       

    }

    .TotalContainer{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-family: "Inter", sans-serif;
        width: 100%;
        max-width: 250px;
        height: 80px;
        margin-top: 15px;
        font-size: 14px;
    }

    button{
        align-self: center;
        width: 100%;
        height: 40px;
        max-width: 150px;
        border-radius: 50px;
        border: none;

        background-color: #39b54a;
        color: white;
        font-family: "Inter", sans-serif;
        font-size: 16px;
         
        
    }

`


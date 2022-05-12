import Main from "../../components/Main"
import * as S from "./style.js" 
import {RiPlantFill} from "react-icons/ri"
function Home(){
    
    return(
        <>
            <S.Container>
                <RiPlantFill/>
                <h1>Nossos Produtos</h1>
                <p>As melhores plantas da região</p>
            </S.Container>
            <Main/>
        </>

    )


}


export default Home
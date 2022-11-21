import styled from "styled-components";
import { Background } from "../../components/Background";
import { Title } from "../../components/Title";
import { useAuth } from "../../providers/auth";
import Board from "./components/Board";
import ButtonAdd from "./components/ButtonAdd";
import { LogOutOutline } from 'react-ionicons'
import { backgroundColor, whiteColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

export default function MyWalletPage() {
    const navigate = useNavigate()
    function goToPage(){
        navigate("/")
    }
    const {userLogged} = useAuth()
    return(
        <>
        <AlignTop>
        <Title>Olá, {userLogged}!</Title>
        <LogOutOutline
        color={whiteColor} 
        height="35px"
        width="35px"
        onClick={goToPage}
        />
        </AlignTop>
        <Background>
            <Board/>
            <AlignButtonAdd>
                <ButtonAdd income={true}/>
                <ButtonAdd income={false}/>
            </AlignButtonAdd>
        </Background>
        </>
    )
}

const AlignButtonAdd = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 350px;
`
const AlignTop = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${backgroundColor};
    align-items: center;
    padding-right: 24px;
`
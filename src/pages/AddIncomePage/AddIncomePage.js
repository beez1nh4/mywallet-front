import styled from "styled-components";
import { Background } from "../../components/Background";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { Title } from "../../components/Title";
import { backgroundColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

export default function AddIncomePage() {
    const navigate = useNavigate()
    function goToPage(){
        navigate("/my-wallet")
    }
    return(
        <>
        <Title>Nova entrada</Title>
        <Background>
            <Input
            placeholder="Valor"
            />
            <Input
            placeholder="Descrição"
            />
            <SubmitButton>Salvar entrada</SubmitButton>
            <SubmitButton onClick={goToPage}>Cancelar</SubmitButton>
            <Fill></Fill>
        </Background>
        
        </>
    )
}

const Fill = styled.div`
    background-color: ${backgroundColor};
    height: 650px;
`
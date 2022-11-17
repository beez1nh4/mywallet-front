import styled from "styled-components";
import Logo from "../../components/Logo";
import { backgroundColor } from "../../constants/colors";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { LinkToClick } from "../../components/LinkToClick";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate()

    function navigateLogin(){
        navigate("/")
    }

    return(
        <>
        <SignUpPageContainer>
        <Logo/>
        <Input
        placeholder="Nome"
        />
        <Input
        placeholder="E-mail"
        />
        <Input
        placeholder="Senha"
        />
        <Input
        placeholder="Confirme a sennha"
        />
        <SubmitButton>Cadastrar</SubmitButton>
        <LinkToClick onClick={navigateLogin}>
            <p>Já tem uma conta? Entre agora!</p>
        </LinkToClick>
        </SignUpPageContainer>
        </>
    )
}

const SignUpPageContainer = styled.div`
    background-color: ${backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
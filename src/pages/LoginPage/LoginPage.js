import styled from "styled-components";
import { Input } from "../../components/Input";
import { LinkToClick } from "../../components/LinkToClick";
import Logo from "../../components/Logo";
import { SubmitButton } from "../../components/SubmitButton";
import { backgroundColor } from "../../constants/colors";

export default function LoginPage() {
    return(
        <>
        <LoginPageContainer>
        <Logo/>
        <Input
        placeholder="E-mail"
        />
        <Input
        placeholder="Senha"
        />
        <SubmitButton>Entrar</SubmitButton>
        <LinkToClick>
            <p>Primeira vez? Cadastre-se!</p>
        </LinkToClick>
        </LoginPageContainer>
        </>
    )
}

const LoginPageContainer = styled.div`
    background-color: ${backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
import { Input } from "../../components/Input";
import { LinkToClick } from "../../components/LinkToClick";
import { SubmitButton } from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { Background } from "../../components/Background";


export default function LoginPage() {
    const navigate = useNavigate()

    function navigateSignUp(){
        navigate("/sign-up")
    }

    return(
        <>
        <Background>
        <Logo/>
        <Input
        placeholder="E-mail"
        />
        <Input
        placeholder="Senha"
        />
        <SubmitButton>Entrar</SubmitButton>
        <LinkToClick onClick={navigateSignUp}>
            <p>Primeira vez? Cadastre-se!</p>
        </LinkToClick>
        </Background>
        </>
    )
}


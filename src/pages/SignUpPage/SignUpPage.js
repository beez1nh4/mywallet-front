import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { LinkToClick } from "../../components/LinkToClick";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { Background } from "../../components/Background";

export default function SignUpPage() {
    const navigate = useNavigate()

    function navigateLogin(){
        navigate("/")
    }

    return(
        <>
        <Background>
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
        placeholder="Confirme a senha"
        />
        <SubmitButton>Cadastrar</SubmitButton>
        <LinkToClick onClick={navigateLogin}>
            <p>Já tem uma conta? Entre agora!</p>
        </LinkToClick>
        </Background>
        </>
    )
}

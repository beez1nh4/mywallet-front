import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { LinkToClick } from "../../components/LinkToClick";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { Background } from "../../components/Background";
import { useState } from "react";
import { URLlocalhost } from "../../constants/urls";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"
import { whiteColor } from "../../constants/colors";

export default function SignUpPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: "", email: "",  password: "", passwordConfirmation: "" })
    const [load, setLoad] = useState(false)

    function navigateLogin(){
        navigate("/")
    }

    function fillForm(e) {
        if (!load){
        const { name, value } = e.target
        const formContent = { ...form, [name]: value }
        setForm(formContent)
        //console.log(formContent)
    }}
    function signUp() {
        const URL = URLlocalhost+"sign-up"
        //console.log(form)
        const body = {...form}
        setLoad(true)
    
        const promise = axios.post(URL, body)
    
        promise.then(() => {
          navigate("/")
          setLoad(false)
        })
    
        promise.catch((err) => {
          alert(err.response.data)
          setLoad(false)
        })
      }
    return(
        <>
        <Background>
        <Logo/>
        <Input
        placeholder="Nome"
        name="name"
        value={form.name}
        onChange={fillForm}
        type="text"
        disabled= {load && true}
        load={load}
        />
        <Input
        placeholder="E-mail"
        name="email"
        value={form.email}
        onChange={fillForm}
        type="text"
        disabled= {load && true}
        load={load}
        />
        <Input
        placeholder="Senha"
        name="password"
        value={form.password}
        onChange={fillForm}
        type="password"
        disabled= {load && true}
        load={load}
        />
        <Input
        placeholder="Confirme a senha"
        name="passwordConfirmation"
        value={form.passwordConfirmation}
        onChange={fillForm}
        type="password"
        disabled= {load && true}
        load={load}
        />
        <SubmitButton onClick={signUp}>
        {load ?
        <ThreeDots 
        height="51" 
        width="51" 
        radius="9"
        color={whiteColor} 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
         />
        :
        "Cadastrar"
        }
          
          </SubmitButton>
        <LinkToClick onClick={navigateLogin}>
            <p>Já tem uma conta? Entre agora!</p>
        </LinkToClick>
        </Background>
        </>
    )
}

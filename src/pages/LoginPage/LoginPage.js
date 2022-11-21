import { Input } from "../../components/Input";
import { LinkToClick } from "../../components/LinkToClick";
import { SubmitButton } from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { Background } from "../../components/Background";
import { useState } from "react";
import { URLlocalhost } from "../../constants/urls";
import axios from "axios";
import { useAuth } from "../../providers/auth";
import { whiteColor } from "../../constants/colors";
import { ThreeDots } from "react-loader-spinner"

export default function LoginPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })
    const [load, setLoad] = useState(false)
    const {setToken, setUserLogged} = useAuth()

    function navigateSignUp(){
        navigate("/sign-up")
    }

    function fillForm(e) {
        if (!load){
        const { name, value } = e.target
        const formContent = { ...form, [name]: value }
        setForm(formContent)
        //console.log(formContent)
    }}

    function login() {
        const URL = URLlocalhost+"sign-in"

        const promise = axios.post(URL, form)

        setLoad(true)

        promise.then((res) => {
          setToken(res.data.token)
          console.log(res.data)
          setLoad(false)
          setUserLogged(res.data.name)
          navigate("/my-wallet")
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
        <SubmitButton onClick={login}>
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
        "Entrar"
        }
        </SubmitButton>
        <LinkToClick onClick={navigateSignUp}>
            <p>Primeira vez? Cadastre-se!</p>
        </LinkToClick>
        </Background>
        </>
    )
}


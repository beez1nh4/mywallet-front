import styled from "styled-components";
import { Background } from "../../components/Background";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { Title } from "../../components/Title";
import { backgroundColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

export default function AddIncomePage() {
    const [form, setForm] = useState({ value: "" , description: ""})
    const [load, setLoad] = useState(false)
    const date = dayjs().format('DD/MM')

    const navigate = useNavigate()
    function goToPage(){
        navigate("/my-wallet")
    }

    function fillForm(e) {
        if (!load){
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
      }}

    function addIncome() {
        const URL = "my-wallet"
        //console.log(form)
        const body = {...form, date, income: true}
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, body, config)
        setLoad(true)
        promise.then((res) => {
          //console.log(res.data.id)
          setLoad(false)
        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
          setLoad(false)
        })
    
      }

    return(
        <>
        <Title>Nova entrada</Title>
        <Background>
            <Input
            placeholder="Valor"
            name="value"
            value={form.name}
            onChange={fillForm}
            type="text"
            disabled= {load && true}
            load={load}
            />
            <Input
            placeholder="Descrição"
            name="description"
            value={form.name}
            onChange={fillForm}
            type="text"
            disabled= {load && true}
            load={load}
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
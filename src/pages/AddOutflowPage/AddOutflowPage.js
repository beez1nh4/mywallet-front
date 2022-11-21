import styled from "styled-components";
import { Background } from "../../components/Background";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/SubmitButton";
import { Title } from "../../components/Title";
import { backgroundColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { URLlocalhost } from "../../constants/urls";
import { useState } from "react";
import { useAuth } from "../../providers/auth";

export default function AddOutflowPage() {
    const [form, setForm] = useState({ value: "" , description: ""})
    const [load, setLoad] = useState(false)
    const date = dayjs().format('DD/MM')
    const {token, userLogged, balance, setBalance, setIsPositive} = useAuth()

    const navigate = useNavigate()
    function goToPage(){
        navigate("/my-wallet")
    }

    function fillForm(e) {
        if (!load){
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
      }}

    function addOutflow() {
        const URL = URLlocalhost+"transactions"
        const {value} = form
        //console.log(form)
        const body = {...form, date, userLogged, isIncome: false}
        console.log(body)
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
          const newBalance = balance-Number(value)
          setBalance(newBalance)
          if (newBalance <=0){
            setIsPositive(false)
          }
          if (newBalance >=0){
            setIsPositive(true)
          }
          navigate("/my-wallet")
        })
    
        promise.catch((err) => {
          alert(err.response.data)
          setLoad(false)
        })
    
      }

    return(
        <>
        <Title>Nova saída</Title>
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
            value={form.description}
            onChange={fillForm}
            type="text"
            disabled= {load && true}
            load={load}
            />
            <SubmitButton onClick={addOutflow}>Salvar saída</SubmitButton>
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
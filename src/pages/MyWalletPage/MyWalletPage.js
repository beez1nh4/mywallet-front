import styled from "styled-components";
import { Background } from "../../components/Background";
import { Title } from "../../components/Title";
import { useAuth } from "../../providers/auth";
import Board from "./components/Board";
import ButtonAdd from "./components/ButtonAdd";
export default function MyWalletPage() {
    const {name} = useAuth()
    return(
        <>
        <Title>Olá, {name}!</Title>
        <Background>
            <Board/>
            <AlignButtonAdd>
            <ButtonAdd/>
            <ButtonAdd/>
            </AlignButtonAdd>
        </Background>
        </>
    )
}

const AlignButtonAdd = styled.div`
    display: flex;
    justify-content: space-between;

`
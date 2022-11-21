import styled from "styled-components";
import { grayColor, whiteColor } from "../../../constants/colors";
import { baseFont } from "../../../constants/fonts";
import BoardItem from "./BoardItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { URLlocalhost } from "../../../constants/urls";
import { useAuth } from "../../../providers/auth";

export default function Board() {
    const [load, setLoad] = useState(true)
    const {transactions, setTransactions, token} = useAuth()
    useEffect(() => {
        const promise = axios.get(URLlocalhost+'transactions', { headers: { Authorization: `Bearer ${token}` } })
    
        promise.then((res) => {
          setTransactions(res.data)
          setLoad(false)
        })
    
        promise.catch((err) => {
            alert(err.response.data)
        })
      },[transactions])
    return(
        <>
        <BoardContainer>
            {transactions.length===0 ?
            <EmptyBoard>Não há registros de entrada ou saída</EmptyBoard> :
            transactions.map((transaction, i) => (
                    <BoardItem transaction={transaction} index={i} key={i}/>
                ))}
        </BoardContainer>
        </>
    )
}

const BoardContainer = styled.div`
    box-sizing: border-box;
    padding: 12px;
    width: 326px;
    height: 446px;
    background: ${whiteColor};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;
`
const EmptyBoard = styled.div`
    width: 180px;
    height: 46px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: ${grayColor};
`
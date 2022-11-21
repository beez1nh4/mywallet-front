import styled from "styled-components";
import { grayColor, whiteColor } from "../../../constants/colors";
import { baseFont } from "../../../constants/fonts";
import BoardItem from "./BoardItem";
import axios from "axios";
import { useEffect } from "react";
import { URLlocalhost } from "../../../constants/urls";
import { useAuth } from "../../../providers/auth";
import Balance from "./Balance";

export default function Board() {
    const {transactions, setTransactions, token, setBalance, setIsPositive} = useAuth()

    useEffect(() => {
        const promise = axios.get(URLlocalhost+'transactions', { headers: { Authorization: `Bearer ${token}` } })
        promise.then((res) => {
          setTransactions(res.data)
          let newBalance = 0
          setBalance(newBalance)
          for (let i = 0; i< res.data.length;i++){
            if (res.data[i].isIncome){
                newBalance = (newBalance+Number(res.data[i].value))
            } else{
                newBalance = (newBalance-Number(res.data[i].value))
            }
            }
            setBalance(newBalance)
            if (newBalance <0){
                setIsPositive(false)
            }
            if (newBalance >=0){
                setIsPositive(true)
            }
    })
        promise.catch((err) => {
            alert(err.response.data)
        })
      },[setTransactions, token])
      
    return(
        <>
        <BoardContainer>
            {transactions.length===0 ?
            <EmptyBoard>Não há registros de entrada ou saída</EmptyBoard> :
            transactions.map((transaction, i) => (
                    <BoardItem transaction={transaction} index={i} key={i}/>
                ))
            }
            {transactions.length!==0 && <Balance/>}
            
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
    overflow-y: scroll;
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
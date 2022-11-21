import styled from "styled-components"
import { blackColor, incomeColor, outflowColor } from "../../../constants/colors"
import { baseFont } from "../../../constants/fonts"
import { useAuth } from "../../../providers/auth"

export default function Balance() {
    const {balance, isPositive} = useAuth()

    return(
        <>
            <BalanceContainer>
                <Title>SALDO</Title>
                <Value condition={isPositive}>{balance}</Value>
            </BalanceContainer>
        </>
    )
}

const BalanceContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
`
const Title = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: ${blackColor};
`
const Value = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: ${(props) => props.condition ? incomeColor : outflowColor };
`
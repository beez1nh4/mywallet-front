import styled from 'styled-components'
import { baseFont } from '../../../constants/fonts'
import { blackColor, incomeColor, lightGrayColor, outflowColor } from '../../../constants/colors'

export default function BoardItem({transaction, index}) {
    const {date, description, value, isIncome} = transaction
    /* const date = dayjs().format('DD/MM')
    const description = 'Mercado'
    const value = '231,30' */
    
    return(
        <>
            <BoardItemContainer>
                <DateLabel>{date}</DateLabel>
                <DescriptionLabel>{description}</DescriptionLabel>
                <ValueLabel condition={isIncome}>{value}</ValueLabel>
            </BoardItemContainer>
        </>
    )
}

const BoardItemContainer = styled.div`
    width: 304px;
    display: flex;
    justify-content: space-between;
`
const DateLabel = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${lightGrayColor};
`
const DescriptionLabel = styled.div`
    width: 175px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${blackColor};
    text-align: left;
    margin-left: 15px;
`
const ValueLabel = styled.div`
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.condition ? incomeColor : outflowColor };
`
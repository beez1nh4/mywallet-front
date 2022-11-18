import styled from "styled-components";
import { grayColor, whiteColor } from "../../../constants/colors";
import { baseFont } from "../../../constants/fonts";
import BoardItem from "./BoardItem";

export default function Board() {
    return(
        <>
        <BoardContainer>
            <EmptyBoard>Não há registros de entrada ou saída</EmptyBoard>
            <BoardItem></BoardItem>
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
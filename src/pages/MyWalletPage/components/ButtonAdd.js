import styled from "styled-components"
import { buttonColor, whiteColor } from "../../../constants/colors"
import { baseFont } from "../../../constants/fonts"

export default function ButtonAdd() {
    return(
        <>
        <ButtonAddContainer>
            <p>+</p>
            <p>Nova entrada</p>
        </ButtonAddContainer>
        </>
    )
}

const ButtonAddContainer = styled.div`
    box-sizing: border-box;
    width: 155px;
    height: 114px;
    background: ${buttonColor};
    border-radius: 5px;
    font-family: ${baseFont};
    font-style: normal;
    border: none;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: ${whiteColor};
    padding: 10px;
`
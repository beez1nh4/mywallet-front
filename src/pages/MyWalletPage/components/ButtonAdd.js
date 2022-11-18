import styled from "styled-components"
import { buttonColor, whiteColor } from "../../../constants/colors"
import { baseFont } from "../../../constants/fonts"
import { AddCircleOutline, RemoveCircleOutline} from 'react-ionicons'
import { useNavigate } from "react-router-dom"

export default function ButtonAdd({income}) {
    const navigate = useNavigate()

    function goToPage(){
        if (income){
            navigate("/add-income")
        } else{
            navigate("/add-outflow")
        }
    }
    return(
        <>
        <ButtonAddContainer onClick={goToPage}>
            {income ?
            <AddCircleOutline
            color={whiteColor} 
            height="25px"
            width="25px"
            />
            :
            <RemoveCircleOutline
            color={whiteColor} 
            height="25px"
            width="25px"
            />}

            {income ?
            <Label>Nova entrada</Label>
            :
            <Label>Nova saída</Label>}
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
const Label = styled.div`
    width: 64px;
    margin-top: 25px;
`
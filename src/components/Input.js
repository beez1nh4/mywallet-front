import styled from "styled-components";
import { blackColor, whiteColor } from "../constants/colors";
import { baseFont } from "../constants/fonts";

export const Input = styled.input`
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    background: ${whiteColor};
    border-radius: 5px;
    margin-bottom: 13px;
    padding: 15px;
    border: none;
    
    ::placeholder{
        color: ${blackColor};
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        
    }`
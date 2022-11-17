import styled from "styled-components";
import { whiteColor } from "../constants/colors";
import { baseFont } from "../constants/fonts";

export const LinkToClick = styled.div`
    width: 191px;
    height: 18px;
    margin-bottom: 600px;
    & p {
        font-family: ${baseFont};
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: ${whiteColor};
    }`
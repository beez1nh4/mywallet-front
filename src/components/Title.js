import styled from "styled-components";
import { backgroundColor, whiteColor } from "../constants/colors";
import { baseFont } from "../constants/fonts";

export const Title = styled.div`
    width: 100%;
    height: 31px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    padding-bottom: 40px;
    padding-top: 25px;
    color: ${whiteColor};
    background-color: ${backgroundColor};
    padding-left: 24px;
`
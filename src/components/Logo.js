import styled from "styled-components";
import { whiteColor } from "../constants/colors";
import { logoFont } from "../constants/fonts";

export default function Logo() {
    return(
        <>
            <LogoComponent>MyWallet</LogoComponent>
        </>
    )
}

const LogoComponent = styled.div`
    width: 147px;
    height: 50px;
    font-family: ${logoFont};
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: ${whiteColor};
    margin-bottom: 24px;
    margin-top: 159px;
`
import styled from "styled-components";
import Logo from "../../components/Logo";
import { backgroundColor } from "../../constants/colors";

export default function SignUpPage() {
    return(
        <>
        <SignUpPageContainer>
        <Logo/>
        </SignUpPageContainer>
        </>
    )
}

const SignUpPageContainer = styled.div`
    background-color: ${backgroundColor};

`
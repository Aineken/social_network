import React from "react";
import {
    Container,
    Div1,
    Div2,
    MainText,
    MainTitle,
} from "./HeroStyled";

import hero from "../../utils/mainSection.jpg"

function Hero() {
    return (
            <Container>
                <Div1>
                    <img src={hero} alt=""/>
                </Div1>
                <Div2>
                    <MainTitle>Welcome!!!</MainTitle>
                    <MainText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </MainText>
                </Div2>
            </Container>
    );
}

export default Hero;

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
                       Welcome to my Social Network Website <br/>
                      <strong>Development in Process!!!</strong>

                    </MainText>
                </Div2>
            </Container>
    );
}

export default Hero;

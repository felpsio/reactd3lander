import React from "react";
import styled from "styled-components";
import FadeIn from "react-lazyload-fadein";

const Wrapper = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    display: grid;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-areas:
        "WQ"
        "WI"
        "WN";
    @media (max-width: 940px) {
        align-items: center;
        justify-items: center;
        display: grid;
    }
`;
const WrapperGroup = styled.div`
    margin: 0 auto;
    text-align: center;
`;
const WrapperImage = styled.img`
    margin: 1rem 1rem !important;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    grid-area: WI;
`;
const WrapperQuote = styled.div`
    margin: 1rem auto;
    width: 80%;
    padding: 20px;
    text-align: center;
    background: #fff;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-style: italic;
    line-height: 28px;
    font-size: 16px;
    transition: all 0.6s ease;
    vertical-align: top;
    grid-area: WQ;
`;
const WrapperName = styled.div`
    color: #384047;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    grid-area: WN;
`;
const WrapperCompany = styled.div`
    color: #94a3a8;
    font-size: 14px;
    font-weight: 200;
    text-align: center;
    grid-area: WN;
`;

const WrapperAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const WrapperAuthorText = styled.div`
`;

const Testimonial = props => (
    <Wrapper className="Testimonial">
        <FadeIn height={340}>
            {onload => (
                <WrapperGroup>
                    <WrapperQuote className="testblock">
                        {props.quote}
                    </WrapperQuote>

                    <WrapperAuthor>
                      <WrapperImage src={props.image} onLoad={onload} />

                      <WrapperAuthorText>
                        <WrapperName>{props.name}</WrapperName>
                        <WrapperCompany>{props.company}</WrapperCompany>
                      </WrapperAuthorText>
                    </WrapperAuthor>
                </WrapperGroup>
            )}
        </FadeIn>
    </Wrapper>
);

export default Testimonial;

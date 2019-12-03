import React, {useState} from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../theme';
import {testimonials} from '../info';

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  background: ${props => props.color};;
  height: 50vw;
`;

const Wrapper = styled.div`
  width: 50vw;
  height: 40vw;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

const Title = styled.div`
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size6}
  text-align: center;
  width: 100vw;
  padding: 1.5vw;
`;

const Company = styled.div`
  font-size: ${fontSizes.size3};
  font-family: ${fonts.playfair};
  letter-spacing: ${letterSpacings.space1};
  line-height: ${lineHeights.height1};
  text-align: center;
  font-weight: bold;
  font-style: italic;
  width: 100vw;
`;

const Quote = styled.div`
  font-size: ${fontSizes.size6};
  font-family: ${fonts.playfair};
  letter-spacing: ${letterSpacings.space1};
  line-height: ${lineHeights.height1}
  text-align: center;
`;

const Author = styled.div`
  font-size: ${fontSizes.size5};
  font-family: ${fonts.playfair};
  letter-spacing: ${letterSpacings.space1};
  line-height: ${lineHeights.height1}
  font-style: italic;
  text-align: right;
  width: 50%;
`;

const AuthorWrapper = styled.div`
  display: flex;
`;

const Arrow = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: 1vw;
  width: 1vw;
  border-style: solid;
  border-color: black;
  border-width: 0px 0.01vw 0.01vw 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
  margin: 10vw;
  margin-top: 15vw;
`;

const LeftArrow = styled(Arrow)`
  transform: rotate(135deg);
`;

const RightArrow = styled(Arrow)`
  transform: rotate(-45deg);
`;

const MidWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Testimonials = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const decreaseSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(testimonials.length - 1);
    }
    else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const increaseSlide = () => {
    if (currentSlide == testimonials.length - 1) {
      setCurrentSlide(0);
    }
    else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <BigWrapper color={colors[testimonials[currentSlide].color]}>
      <Title>TESTIMONIALS</Title>
      <MidWrapper>
        <LeftArrow onClick={() => decreaseSlide()}/>
        <Wrapper>
        <Company>{testimonials[currentSlide].company}</Company>
        <Quote>{testimonials[currentSlide].quote}</Quote>
        <AuthorWrapper>
          <Author/>
          <Author>{testimonials[currentSlide].author}</Author>
        </AuthorWrapper>
        </Wrapper>
        <RightArrow onClick={() => increaseSlide()}/>
      </MidWrapper>
    </BigWrapper>
    );
};

export default Testimonials;

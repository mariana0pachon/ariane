import React, {useState} from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../theme';
import {methodology} from '../info';
import slide1 from '../assets/methodology/mymethodology1.jpg'
import slide2 from '../assets/methodology/slide2.mm.jpg'
import slide3 from '../assets/methodology/slide3.mm.jpg'
import slide4 from '../assets/methodology/slide4.mm.jpg'

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-image: url(${props => props.img});
  height: 43vw;
`;

const Quote = styled.div`
  font-size: ${fontSizes.size3};
  font-family: ${fonts.playfair};
  letter-spacing: ${letterSpacings.space1};
  line-height: ${lineHeights.height1};
  text-align: center;
  font-weight: bold;
  width: 30vw;
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
  margin-top: 3vw;
`;

const LeftArrow = styled(Arrow)`
  transform: rotate(135deg);
`;

const RightArrow = styled(Arrow)`
  transform: rotate(-45deg);
`;

const MyMethodologySlider = () => {

  const allImages = [slide1, slide2, slide3, slide4, slide3, slide4];

  const [currentSlide, setCurrentSlide] = useState(0);

  const decreaseSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(methodology.length - 1);
    }
    else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const increaseSlide = () => {
    if (currentSlide == methodology.length - 1) {
      setCurrentSlide(0);
    }
    else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <BigWrapper img={allImages[currentSlide]}>
      <LeftArrow onClick={() => decreaseSlide()}/>
      <Quote>{methodology[currentSlide].text}</Quote>
      <RightArrow onClick={() => increaseSlide()}/>
    </BigWrapper>
    );
};

export default MyMethodologySlider;

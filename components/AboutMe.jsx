import React, {useState} from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../theme';
import {aboutme} from '../info';
import slides1_2 from '../assets/aboutme/SLIDES1_2.jpg'
import slide3 from '../assets/aboutme/SLIDE3.jpg'
import slide4 from '../assets/aboutme/SLIDE4.jpg'
import slide5 from '../assets/aboutme/SLIDE5.jpg'
import slide6 from '../assets/aboutme/SLIDE6.jpg'
import slide7 from '../assets/aboutme/SLIDE7.jpg'
import slide8 from '../assets/aboutme/SLIDE8.jpg'
import slide9 from '../assets/aboutme/SLIDE9.jpg'

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-image: url(${props => props.img});
  height: 100vh;
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

const AboutMe = () => {

  const allImages = [slides1_2, slides1_2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];

  const [currentSlide, setCurrentSlide] = useState(0);

  const decreaseSlide = () => {
    if (currentSlide == 0) {
      setCurrentSlide(aboutme.length - 1);
    }
    else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const increaseSlide = () => {
    if (currentSlide == aboutme.length - 1) {
      setCurrentSlide(0);
    }
    else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <BigWrapper img={allImages[currentSlide]}>
      <LeftArrow onClick={() => decreaseSlide()}/>
      <Quote>{aboutme[currentSlide].text}</Quote>
      <RightArrow onClick={() => increaseSlide()}/>
    </BigWrapper>
    );
};

export default AboutMe;

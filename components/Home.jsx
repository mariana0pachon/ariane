import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../theme';
import profile from '../assets/profile.jpg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 18vw;
  height: 50vh;
  background-image: url(${profile});
  margin-bottom: 2%;
`;

const HomeQuote = styled.div`
  font-size: ${fontSizes.size5};
  font-family: ${fonts.playfair};
  font-weight: bold;
  letter-spacing: ${letterSpacings.space1};
  line-height: ${lineHeights.height1}
  width: 23vw;
  margin-top: 10%;
`;
//TODO: change margin-top, that's bad

const HomeButton = styled.button`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.size2};
  background: ${colors.lightPink};
  color: ${colors.black}
  border-radius: 30px;
  border: 0px;
  padding: 1.5vh;
  width: 10vw;
  margin: 15%;
  transition: color, background 0.5s ease-in-out;

  &:hover {
    background: ${colors.green};
    color: ${colors.lightPink}
  }
`;
//TODO: change margin, that's bad


const Column = styled.div`
  text-align: center;
  margin: 3%;
`;
//TODO: change margin, that's bad

const Home = () => (
<Wrapper>
  <ProfileImage/>
  <Column>
    <HomeQuote>“I am a trend expert and strategist who identifies socio-cultural trends to help my clients create products and services that bring real meaning and value for people today and in the future.”</HomeQuote>
    <HomeButton>More About Me</HomeButton>
  </Column>
</Wrapper>
);

export default Home;

import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../../theme';
import profile from '../../assets/work/lectures/lecture.jpg';

const BigWrapper = styled.div`
  height: 100vw;
  display: flex;
  align-content: space-between;
`;

const Title = styled.div`
  background: ${colors.lightPink};
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size7};
  text-align: center;
  padding-top: 1vw;
  padding-bottom: 1vw;
`;

const Description = styled.div`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.size2};
  width: 25vw;
  padding: 1vw;
`;

const ProfileImage = styled.div`
  width: 25vw;
  height: 15vw;
  background-image: url(${profile});
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vw;
  height: 56vh;
`;

const Footer = styled.div`
  background: ${colors.lightPink};
  height: 5vw;
`;

const Lectures = () => <>
<Title>LECTURES</Title>
<Wrapper>
<ProfileImage/>
<Description>I give lectures on trends and innovation at leading universities in Spain, U.S.A. and Nigeria. </Description>
</Wrapper>
<Footer/>
</>;

export default Lectures;

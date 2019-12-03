import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../../theme';
import profile from '../../assets/avdv3.jpg';

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
  width: 18vw;
  height: 25vw;
  background-image: url(${profile});
  background-size: cover;
  filter: grayscale(100%);
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

const Trips = () => <>
<Title>INSPIRATION TRIPS & RETAIL SAFARIS</Title>
<Wrapper>
<ProfileImage/>
<Description>I design inspiration trips and retail safaris so that my clients can experience first-hand the trends I identify. I have exclusive access to the most inspiring creative talents, projects and places worldwide which enables be to create extremely inspirational and one of a kind learning trips.</Description>
</Wrapper>
<Footer/>
</>;

export default Trips;

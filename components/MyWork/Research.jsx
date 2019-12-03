import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../../theme';
import profile from '../../assets/work/research/research.JPG';

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

const Research = () => <>
<Title>RESEARCH</Title>
<Wrapper>
<ProfileImage/>
<Description>All the trend research I do is bespoke for the specific needs of my clients. The insights I provide are always accompanied by strategic recommendations. I have a very large network of experts in various fields such as technology, fashion, art, design, architecture, music, retail, beauty and innovation who contribute to help me design my research and thinking.</Description>
</Wrapper>
<Footer/>
</>;

export default Research;

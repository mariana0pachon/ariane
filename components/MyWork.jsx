import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../theme';

const Wrapper = styled.div`
  background: ${colors.lightPink}
`;

const Title = styled.div`
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size6}
  text-align: center;
  padding-top: 1%;
`;

const WorkBox = styled.div`
  width: 100vw;
  height: 20vh;
  background: ${colors.black};
  transition: background 0.5s ease-in-out;

  &:hover{
    background: ${colors.darkPink}
  }
`

const WorkTitle = styled.div`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.size3}
  text-align: center;
  width: 100%;
`;

const WorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 16vw;
  padding: 2%;
  padding-left: 0.5%;
  padding-right: 0.5%;
`;

const BoxesWrapper = styled.div `
  display: flex;
  justify-content: center;
`

const MyWork = () => (
<Wrapper>
  <Title>MY WORK</Title>
  <BoxesWrapper>
    <WorkWrapper>
      <WorkBox/>
      <WorkTitle>PUBLICATIONS</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkBox/>
      <WorkTitle>RESEARCH</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkBox/>
      <WorkTitle>WORKSHOPS</WorkTitle>
    </WorkWrapper>
    </BoxesWrapper>
    <BoxesWrapper>
    <WorkWrapper>
      <WorkBox/>
      <WorkTitle>CONFERENCES</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkBox/>
      <WorkTitle>LECTURES</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkBox/>
      <WorkTitle>INSPIRATION TRIPS</WorkTitle>
    </WorkWrapper>
  </BoxesWrapper>
</Wrapper>
);

export default MyWork;

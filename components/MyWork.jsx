import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../theme';

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.lightPink};
`;

const Title = styled.div`
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size6}
  text-align: center;
  padding: 1.5vw;
  width: 100vw;
`;

const WorkImage = styled.div`
  width: 100vw;
  height: 9vw;
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
`;

const WorkRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin-bottom: 5vh;
`

const MyWork = () => (
  <BigWrapper>

  <Title>MY WORK</Title>

    <WorkRow>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>PUBLICATIONS</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>RESEARCH</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>WORKSHOPS</WorkTitle>
    </WorkWrapper>
    </WorkRow>

    <WorkRow>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>CONFERENCES</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>LECTURES</WorkTitle>
    </WorkWrapper>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>INSPIRATION TRIPS</WorkTitle>
    </WorkWrapper>
    </WorkRow>

</BigWrapper>
);

export default MyWork;

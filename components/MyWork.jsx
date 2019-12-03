import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../theme';
import mancha from '../assets/work/mancha.png'

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${colors.lightPink};
  height: 50vw;
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
  height: 12vw;
  background-image: url(${mancha});
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  transition: background 0.5s ease-in-out;
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
  width: 13vw;
`;

const WorkRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin-bottom: 5vh;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

const MyWork = () => (
  <BigWrapper>

  <Title>MY WORK</Title>

    <WorkRow>
    <StyledLink to='/publications'>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>PUBLICATIONS</WorkTitle>
    </WorkWrapper>
    </StyledLink>

    <StyledLink to='/research'>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>RESEARCH</WorkTitle>
    </WorkWrapper>
    </StyledLink>

    <StyledLink to='/workshops'>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>WORKSHOPS</WorkTitle>
    </WorkWrapper>
    </StyledLink>

    </WorkRow>

    <WorkRow>

    <StyledLink to='/conferences'>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>CONFERENCES</WorkTitle>
    </WorkWrapper>
    </StyledLink>

    <StyledLink to='/lectures'>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>LECTURES</WorkTitle>
    </WorkWrapper>
    </StyledLink>

    <StyledLink to='/trips'>
    <WorkWrapper>
      <WorkImage/>
      <WorkTitle>INSPIRATION TRIPS</WorkTitle>
    </WorkWrapper>
    </StyledLink>
    </WorkRow>

</BigWrapper>
);

export default MyWork;

import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors, fonts, fontSizes, letterSpacings, lineHeights} from '../theme';
import methodologyHome1 from '../assets/methodology/mymethodology.jpg'

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size6}
  text-align: center;
  padding: 1.5vw;
`;

const Image = styled.div`
  height: 50vw;
  width: 80vw;
  background-image: url(${methodologyHome1});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text = styled.div`
  font-size: ${fontSizes.size5};
  font-family: ${fonts.playfair};
  letter-spacing: ${letterSpacings.space1};
  line-height: ${lineHeights.height1}
  text-align: center
  padding: 24vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
`;

const Button = styled.button`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.size2};
  background: ${colors.lightPink};
  color: ${colors.black}
  border-radius: 30px;
  border: 0px;
  padding: 1vw;
  width: 10vw;
  margin-left: 34vw;
  transition: color, background 0.5s ease-in-out;

  &:hover {
    background: ${colors.blue};
  }
`;

const MyMethodology = () => (
<BigWrapper>
  <Image>
    <Title>MY METHODOLOGY</Title>
    <Text>Trends are manifestations of people's emotional needs. They are driven first and foremost by emotions. In a context where the pace of change is ever increasing, identifying changes in people and in society's emotional landscape is crucial.
  I developed a unique methodology to ensure that the trends insights I provide are fully actionable by my clients.
    </Text>
    <Link to='/mymethodology'><Button>Learn More</Button></Link>
  </Image>
</BigWrapper>
);

export default MyMethodology;

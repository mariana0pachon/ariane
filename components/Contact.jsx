import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, letterSpacings, lineHeights} from '../theme';

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 20vw;
`;

const Title = styled.div`
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size6}
  text-align: center;
  padding: 1.5vw;
`;

const Email = styled.div`
  font-size: ${fontSizes.size5};
  font-family: ${fonts.playfair};
  font-weight: bold;
  letter-spacing: ${letterSpacings.space1};
  line-height: ${lineHeights.height1}
  text-align: center;
  width: 100vw;
  color: black;
`;

const Contact = () => <BigWrapper>
  <Title>CONTACT ME</Title>
  <Email as='a' href = "mailto:ariane@arianevandeven.com">ariane@arianevandeven.com</Email>
</BigWrapper>;

export default Contact;

import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes} from '../theme';
import placeholder from '../assets/placeholder.jpg'

const BigWrapper = styled.div`
  
`;

const TitleImage = styled.div`
  height: 40vw;
  width: 80vw;
  background-image: url(${placeholder});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MyMethodology = () => (
<>
  <TitleImage/>

</>
);

export default MyMethodology;

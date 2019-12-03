import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes, lineHeights, letterSpacings} from '../../theme';
import pub1 from '../../assets/work/publications/IR-2015.jpg';
import pub2 from '../../assets/work/publications/IR2016.jpg';
import pub3 from '../../assets/work/publications/IR2017.jpg';
import pub4 from '../../assets/work/publications/IR2018.jpg';


const Title = styled.div`
  background: ${colors.lightPink};
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size7};
  text-align: center;
  padding-top: 1vw;
  padding-bottom: 1vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Description = styled.div`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.size2};
  width: 25vw;
`;

const ImageWrapper = styled.div`
  display:flex;
  width: 100vw;
  justify-content: center;
`;

const Image = styled.div`
  background-image: url(${props => props.img});
  width: 10vw;
  height: 10vw;
  background-size: cover;
  margin: 1vw;
`;

const Publications = () => <>
  <Title>PUBLICATIONS</Title>
  <Wrapper>
    <Description>I write annual trends reports for over 10 years for large corporations such as Telefonica and Puig. These publications are tailor-made for these companies. They focus on socio-cultural trends that can provide them with new territories for innovation and help them understand emerging consumer behaviours and mindsets. I work very closely with my art director to ensure that all my publications are visually inspiring and easy to understand for a broad audience. 
    </Description>
    <ImageWrapper>
        <Image img={pub4}/>
        <Image img={pub3}/>
        <Image img={pub2}/>
    </ImageWrapper>
    <ImageWrapper>
        <Image img={pub1}/>
        <Image img={pub1}/>
        <Image img={pub1}/>
    </ImageWrapper>
    <ImageWrapper>
        <Image img={pub2}/>
        <Image img={pub3}/>
        <Image img={pub1}/>
    </ImageWrapper>
  </Wrapper>
</>;

export default Publications;

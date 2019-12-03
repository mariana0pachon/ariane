import React, {useRef} from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {colors, fonts, fontSizes} from '../theme';

const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vw;
`;

const Name = styled.div`
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size4};
  width: 25vw;
  text-align: center;
`;

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: right;
  width: 50vw;
`;

const NavItem = styled.div`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.size1};
  color: ${colors.grey};
  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${colors.lightGrey};
  }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const scrollVertically = (amount) => {
  let y = window.innerWidth * (amount / 100);
  window.scrollTo(0, y);
}

const Navbar = () => (
  <BigWrapper>
  <Wrapper>
    <Name>ARIANE VAN DE VEN</Name>
    <NavItemWrapper>
      <StyledLink to='/'><NavItem>Home</NavItem></StyledLink>
      <StyledLink to='/aboutme'><NavItem>About Me</NavItem></StyledLink>
      <StyledLink to='/'><NavItem onClick={() => scrollVertically(55) }>My Work</NavItem></StyledLink>
      <StyledLink to='/mymethodology'><NavItem>My Methodology</NavItem></StyledLink>
      <StyledLink to='/'><NavItem onClick={() => scrollVertically(205) }>Contact</NavItem></StyledLink>
    </NavItemWrapper>
  </Wrapper>
  </BigWrapper>
);

export default Navbar;

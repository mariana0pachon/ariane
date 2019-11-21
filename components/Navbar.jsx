import React from "react";
import styled from 'styled-components';
import {colors, fonts, fontSizes} from '../theme';

const Wrapper = styled.div`
  width: 98vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Name = styled.div`
  font-family: ${fonts.libreCaslon};
  font-size: ${fontSizes.size4};
  width: 25vw;
  text-align: right;
`;

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50vw;
`;

const NavItem = styled.div`
  font-family: ${fonts.playfair};
  font-size: ${fontSizes.size1};
  color: ${colors.grey};
  width: 13%;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${colors.lightGrey};
  }
`;

const Navbar = () => (
  <Wrapper>
    <Name>ARIANE VAN DE VEN</Name>
    <NavItemWrapper>
      <NavItem>Home</NavItem>
      <NavItem>About Me</NavItem>
      <NavItem>My Work</NavItem>
      <NavItem>My Methodology</NavItem>
      <NavItem>Contact</NavItem>
    </NavItemWrapper>
  </Wrapper>
);

export default Navbar;

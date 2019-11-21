import React from "react";
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

const Navbar = () => (
  <BigWrapper>
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
  </BigWrapper>
);

export default Navbar;

import React from "react";
import {
  Nav,
  NavWrapper,
  NavLogo,
  NavItemWrapper,
  NavItem,
  NavItemIcon,
  NavItemText,
  NavTweetButton,
} from "./Styled";
interface Props {}

const Navbar: React.FC = (props: Props) => {
  return (
    <>
      <Nav>
        <NavWrapper>
          <NavLogo></NavLogo>
          <NavItemWrapper>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemIcon></NavItemIcon>
              <NavItemText>HOME</NavItemText>
            </NavItem>
          </NavItemWrapper>
          <NavTweetButton>Tweet</NavTweetButton>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Navbar;

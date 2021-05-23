import styled from "styled-components";

export const Nav = styled.div`
  background-color: burlywood;
  max-width: 251px;
  height: 700px;
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 1200px) {
    max-width: 50px;
  }
`;

export const NavWrapper = styled.div`
  background-color: blueviolet;
  max-width: 251px;
  height: 700px;
  width: 100%;
  display: flex;
  position: fixed;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    max-width: 50px;
  }
`;
export const NavLogo = styled.div`
  background-color: yellowgreen;
  width: 100%;
  max-height: 50px;
  display: flex;
  height: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 1200px) {
  }
`;
export const NavItemWrapper = styled.div`
  background-color: royalblue;
  width: 100%;
  max-height: 500px;
  height: 100%;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 1200px) {
  }
`;
export const NavItem = styled.div`
  background-color: red;
  width: 100%;
  max-width: 174px;
  max-height: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
export const NavItemIcon = styled.div`
  background-color: yellow;
  width: 100%;
  max-width: 26px;
  max-height: 26px;
  height: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
  }
`;
export const NavItemText = styled.div`
  width: 100%;
  max-width: 120px;
  max-height: 26px;
  height: 100%;
  display: flex;
  font-size: 20px;
  margin-left: 5px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavTweetButton = styled.button`
  width: 100%;
  max-width: 175px;
  max-height: 50px;
  height: 100%;
  display: flex;
  font-size: 20px;
  background-color: #1da1f1;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

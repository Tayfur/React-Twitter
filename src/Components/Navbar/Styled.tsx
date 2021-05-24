import styled from "styled-components";

export const Nav = styled.div`
  max-width: 251px;
  height: 700px;
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 1200px) {
    padding-left: 5px;
    max-width: 60px;
  }
`;

export const NavWrapper = styled.div`
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
export const NavLogo = styled.img`
  width: 100%;
  max-height: 50px;
  max-width: 50px;
  display: flex;
  height: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
  }
`;
export const NavItemWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  height: 100%;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 1200px) {
  }
`;
export const NavItem = styled.div`
  width: 100%;
  max-width: 174px;
  max-height: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: #223f5d;
    border-radius: 100px;
  }
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
export const NavItemIcon = styled.img`
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
  font-size: 18px;
  margin-left: 20px;
  align-items: center;
  font-weight: 800;
  :hover {
    color: #1da1f1;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavTweetButton = styled.button`
  width: 100%;
  max-width: 200px;
  max-height: 50px;
  height: 100%;
  display: flex;
  font-size: 18px;
  background-color: #1da1f1;
  border-radius: 100px;
  border-color: #1da1f1;
  color: #fff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 800;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

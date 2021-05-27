import styled from "styled-components";

export const Nav = styled.div`
  max-width: 251px;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 1200px) {
    padding-left: 5px;
    max-width: 60px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  max-width: 251px;
  height: 100%;
  width: 100%;
  display: flex;
  position: fixed;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    max-width: 50px;
  }
  @media screen and (max-width: 480px) {
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
  margin-bottom: 200px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavUser = styled.div`
  width: 100%;
  max-width: 230px;
  max-height: 64px;
  height: 100%;
  display: flex;
  border-radius: 100px;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #223f5d;
    border-radius: 100px;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const NavUserLogo = styled.img`
  width: 100%;
  max-width: 40px;
  max-height: 40px;
  height: 100%;
  display: flex;
  border-radius: 100px;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const NavUserUsernameSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const NavUserUsername = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const NavUserUserTag = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

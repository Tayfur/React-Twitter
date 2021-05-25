import styled from "styled-components";

export const FeedContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 2000px;
  display: flex;
  position: relative;
  flex-direction: column;
  border-left: solid 1px #37444d;
  border-right: solid 1px #37444d;

  @media screen and (max-width: 1200px) {
  }
`;

export const FeedNav = styled.div`
  max-width: 600px;
  width: 100%;
  height: 50px;
  max-height: 50px;
  display: flex;
  position: relative;
  z-index: 3;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedNavFixed = styled.div`
  max-width: 600px;
  width: 100%;
  height: 50px;
  max-height: 50px;
  display: flex;
  margin: 0;
  background-color: ${({ theme }) => theme.body};

  border-bottom: solid 1px #37444d;

  position: fixed;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedNavText = styled.h1`
  font-size: 20px;
  font-weight: 800;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedTweetSection = styled.div`
  max-width: 600px;
  width: 100%;
  height: 150px;
  max-height: 150px;
  display: flex;
  position: relative;
  background-color: red;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCard = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  border-top: solid 1px #37444d;
  border-bottom: solid 1px #37444d;

  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardLogo = styled.div`
  max-width: 48px;
  width: 100%;
  max-height: 600px;
  display: flex;
  position: relative;
  margin-right: 20px;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardLogoProfileIcon = styled.img`
  max-width: 48px;
  width: 100%;
  max-height: 48px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 100px;
  object-fit: cover;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSection = styled.div`
  width: 100%;
  max-height: 900px;
  display: flex;
  position: relative;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionUserData = styled.div`
  width: 100%;
  max-height: 24px;
  display: flex;
  position: relative;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionUsername = styled.a`
  max-height: 24px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionUserTag = styled.a`
  max-height: 24px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  color: #7e8e9c;
  margin-left: 3px;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionPostedTime = styled.a`
  cursor: pointer;
  max-height: 24px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  color: #7e8e9c;
  margin-left: 3px;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionPost = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  padding-top: 5px;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionPostText = styled.span`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 1200px) {
  }
`;

export const FeedCardSectionPostAction = styled.div`
  display: flex;
  position: relative;
  max-width: 425px;
  margin-top: 12px;
  margin-bottom: 12px;

  height: 20px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionPostActionItem = styled.div`
  display: flex;
  position: relative;
  max-width: 55px;
  height: 19px;
  flex-direction: row;
  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionPostActionItemIcon = styled.img`
  display: flex;
  position: relative;
  max-width: 18.75px;
  width: 100%;
  height: 18.75px;
  border-radius: 100px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
  }
`;
export const FeedCardSectionPostActionItemText = styled.span`
  display: flex;
  position: relative;
  margin-left: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 1200px) {
  }
`;

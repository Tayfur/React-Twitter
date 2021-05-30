import styled from "styled-components";

export const ExploreContainer = styled.div`
  max-height: 1500px;
  max-width: 350px;
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  position: static;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const ExploreWrapper = styled.div`
  height: 100%;
  max-width: 350px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
  }
`;

export const ExploreSearch = styled.div`
  background-color: #253341;
  height: 53px;
  max-width: 350px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 100px;
  margin-left: 20px;
  :focus-within {
    border: solid 1px #5fc2ff;
  }
  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreSearchButton = styled.img`
  height: 20px;
  max-width: 44px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  margin-left: 10px;
  border-radius: 100px;

  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreSearchInput = styled.textarea`
  width: 100%;
  max-width: 250px;
  background-color: #253341;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 15px;
  height: 20px;
  outline: none;
  border-style: none;
  resize: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrends = styled.div`
  background-color: #192734;
  height: 500px;
  max-width: 350px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;

  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrendsHead = styled.div`
  height: 50px;
  max-width: 350px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px #37444d;
  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrendsHeadText = styled.h2`
  height: 50px;
  max-width: 350px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 800;
  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrendsHeadIcon = styled.img`
  padding: 9px;
  height: 40px;
  max-width: 40px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  border-radius: 100px;
  :hover {
    background-color: #223f5d;
  }
  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrendsItem = styled.div`
  margin-top: 5px;
  max-height: 80px;
  max-width: 350px;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #37444d;
  :hover {
    background-color: #223f5d;
  }
  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrendsItemHead = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  justify-content: flex-start;
  align-items: center;
  color: #8292a0;
  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrendsItemTopic = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  font-weight: 800;
  font-size: 15px;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 1000px) {
  }
`;
export const ExploreTrendsItemTweetCounter = styled.div`
  margin-top: 3px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #8292a0;
  @media screen and (max-width: 1000px) {
  }
`;

import styled from "styled-components";

export const FeedContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 2000px;
  display: flex;
  position: relative;
  flex-direction: column;
  border-left: solid 1px #37444d;

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
  min-height: 150px;
  max-height: 600px;
  display: flex;
  position: relative;
  background-color: green;
  @media screen and (max-width: 1200px) {
  }
`;

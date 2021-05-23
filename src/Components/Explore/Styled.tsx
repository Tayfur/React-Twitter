import styled from "styled-components";

export const ExploreContainer = styled.div`
  background-color: aqua;
  max-width: 350px;
  height: 500px;
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  background-color: aqua;
  max-width: 350px;
  height: 500px;
  width: 100%;
  display: flex;
  position: fixed;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

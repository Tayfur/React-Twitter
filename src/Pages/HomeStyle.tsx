import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
  }
`;

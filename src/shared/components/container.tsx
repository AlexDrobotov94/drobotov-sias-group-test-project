import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => `calc(${theme.breakpoints.xl} + 2rem)`};
  padding-inline: 1rem;
  width: 100%;
`;

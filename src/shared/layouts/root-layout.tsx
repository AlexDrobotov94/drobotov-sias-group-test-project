import styled from "styled-components";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return <Root>{children}</Root>;
}

const Root = styled.main`
  min-height: 100lvh;
  display: flex;
  justify-content: center;
`;

import styled from "styled-components";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return <Root>{children}</Root>;
}

const Root = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

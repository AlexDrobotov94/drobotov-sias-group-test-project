import { MainPage } from "@/pages/main";
import { RootLayout } from "@/shared/layouts/root-layout";
import { GlobalStyle } from "@/shared/styles/global";
import { theme } from "@/shared/styles/theme";
import { ThemeProvider } from "styled-components";

// TODO: prettier styled components
// TODO: fsd linter
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootLayout>
        <MainPage />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import { theme } from "../shared/styles/theme";
import { MainPage } from "../pages/main";
import { GlobalStyle } from "../shared/styles/global";
import { RootLayout } from "../shared/layouts/root-layout";

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

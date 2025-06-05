import { ThemeProvider } from "styled-components";
import { theme } from "../shared/styles/theme";
import { MainPage } from "../pages/main";
import { GlobalStyle } from "../shared/styles/global";

// TODO: prettier styled components
// TODO: fsd linter
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;

import { MainPage } from "@/pages/main";
import { RootLayout } from "@/shared/layouts/root-layout";
import { store } from "@/shared/store/store";
import { GlobalStyle } from "@/shared/styles/global";
import { theme } from "@/shared/styles/theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";

// TODO: fsd linter
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RootLayout>
          <MainPage />
        </RootLayout>
        <Toaster position="top-right" />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

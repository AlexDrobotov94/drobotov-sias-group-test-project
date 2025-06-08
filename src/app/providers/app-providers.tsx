import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";

import { theme } from "@/shared/styles/theme";
import { GlobalStyle } from "@/shared/styles/global";
import { store } from "@/shared/store/store";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Toaster position="top-right" />
    </ThemeProvider>
  </ReduxProvider>
);

import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";

import { store } from "@/shared/store/store";
import { theme } from "@/shared/styles/theme";
import { GlobalStyle } from "@/shared/styles/global";
import { NotificationsProvider } from "./notifications-provider";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <NotificationsProvider>
        <GlobalStyle />
        {children}
        <Toaster position="top-right" />
      </NotificationsProvider>
    </ThemeProvider>
  </ReduxProvider>
);

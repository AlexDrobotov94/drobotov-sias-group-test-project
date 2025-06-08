import { MainPage } from "@/pages/main";
import { RootLayout } from "@/shared/layouts/root-layout";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <RootLayout>
        <MainPage />
      </RootLayout>
    </AppProviders>
  );
}

export default App;

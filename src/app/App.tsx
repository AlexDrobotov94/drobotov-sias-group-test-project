import { MainPage } from "@/pages/main";
import { RootLayout } from "@/shared/layouts/root-layout";
import { Toaster } from "sonner";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <RootLayout>
        <MainPage />
      </RootLayout>

      <Toaster position="top-right" />
    </AppProviders>
  );
}

export default App;

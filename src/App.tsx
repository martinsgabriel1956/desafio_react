import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { UserContextProvider } from "./contexts/UserContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { queryClient, persister } from "./services/query-client";
import './styles/global.scss';
import { AppRoutes } from "./routes";
import { ToggleThemeButton } from "./components/ToggleThemeButton";

export function App() {
  return (
    <ThemeContextProvider>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{
          persister,
          maxAge: 1000 * 60 * 60 * 24,
        }}
      >
        <UserContextProvider>
          <>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
            <ToggleThemeButton />
          </>
        </UserContextProvider>
        <ReactQueryDevtools />
      </PersistQueryClientProvider>
    </ThemeContextProvider>
  );
}

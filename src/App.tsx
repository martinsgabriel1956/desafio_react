import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import { UserContextProvider } from "./contexts/UserContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import './styles/global.scss';
import { ToggleThemeButton } from "./components/ToggleThemeButton";

export function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <>
          <RouterProvider router={appRoutes} />
          <ToggleThemeButton />
        </>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}
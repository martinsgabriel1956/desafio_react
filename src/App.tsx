import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import { UserContextProvider } from "./contexts/UserContext";
import './styles/global.css';

export function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={appRoutes} />
    </UserContextProvider>
  );
}
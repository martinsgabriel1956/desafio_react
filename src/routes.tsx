import { createBrowserRouter } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Repositories } from './pages/Repositories';
import { Followers } from './pages/Followers';
import { Followings } from './pages/Followings';
import { UserProfile } from './pages/UserProfile';

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/repositories",
    element: <Repositories />,
  },
  {
    path: "/followers",
    element: <Followers />,
  },
  {
    path: "/followings",
    element: <Followings />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
])



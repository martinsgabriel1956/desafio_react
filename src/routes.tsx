import { createBrowserRouter } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Repositories } from './pages/Repositories';
import { Followers } from './pages/Followers';
import { Followings } from './pages/Followings';
import { UserProfile } from './pages/UserProfile';
import { UserLayout } from './layout/UserLayout';

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile/",
    element: <UserLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: ":username",
        element: <UserProfile />,
      }
    ]
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
    path: "/profile/:username",
    element: <UserProfile />,
  },
])



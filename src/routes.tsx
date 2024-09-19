import { Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Repositories } from './pages/Repositories';
import { Followers } from './pages/Followers';
import { Followings } from './pages/Followings';
import { UserProfile } from './pages/UserProfile';
import { DefaultLayout, OptionLayout, UserLayout } from './layout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<UserLayout />}>
          <Route path="home" element={<Home />} />
          <Route path=":username" element={<UserProfile />} />
        </Route>
        <Route path="/" element={<OptionLayout />}>
          <Route path="repositories" element={<Repositories />} />
          <Route path="followers" element={<Followers />} />
          <Route path="followings" element={<Followings />} />
        </Route>
      </Route>
    </Routes>
  )
}

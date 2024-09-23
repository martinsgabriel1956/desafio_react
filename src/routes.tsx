import { Route, Routes } from 'react-router-dom';
import { Followers, Followings, Home, Login, Repositories, UserProfile } from './pages';
import { DefaultLayout, OptionLayout, UserLayout } from './layouts';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<UserLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile/:username" element={<UserProfile />} />
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

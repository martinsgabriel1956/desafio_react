import './style.scss';

import { FooterOption } from './components/footer-option';
import { FollowersIcon, FollowingIcon, GithubIcon, HomeIcon } from '../ui';

const FooterOptions = [
  {
    path: "/profile/home",
    Icon: HomeIcon,
    text: "Home"
  },
  {
    path: "/repositories",
    Icon: GithubIcon,
    text: "Repos"
  },
  {
    path: "/followers",
    Icon: FollowersIcon,
    text: "Seguidores"
  },
  {
    path: "/followings",
    Icon: FollowingIcon,
    text: "Seguindo"
  }
]

export function Footer() {
  return (
    <div className="footer-container">
      {FooterOptions.map((option) => (
        <FooterOption path={option.path} Icon={option.Icon} text={option.text} />
      ))}
    </div>
  );
}
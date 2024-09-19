import { Link } from "react-router-dom";
import './style.scss'
import ArrowRight from '../../assets/arrow-right_2.svg';

type FollowProps = {
  follower: {
    avatar_url: string;
    login: string;
  }
}

export function Follow({ follower }: FollowProps) {
  return (
    <li className="follow-container">
      <img className="avatar" src={follower.avatar_url} alt="Avatar do usuário" />
      <p>#{follower.login}</p>
      <Link to={`/profile/${follower.login}`}>
        <img src={ArrowRight} alt="" />
      </Link>
    </li>
  )
}
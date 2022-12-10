import { Link } from "react-router-dom";
import { Avatar, Container, FollowContent } from "./styles";
import { FollowListProps } from "./types";

import ArrowRight from "../../assets/arrow-right_2.svg";

export const FollowList: React.FC<FollowListProps> = ({ followArray }) => {
  return (
    <Container>
      {followArray.map(item => (
        <FollowContent key={item.id}>
        <Avatar className="avatar" src={item.avatar_url} alt="Usuário" />
        <p>#{item.login}</p>
        <Link to={`/profile/${item.login}`}>
          <img src={ArrowRight} alt="" />
        </Link>
      </FollowContent>
      ))}
    </Container>
  );
}

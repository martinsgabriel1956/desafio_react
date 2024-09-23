import { useFollowersController } from "./useFollowersController";
import './style.scss'
import { Follow } from "../../components/Follow";
import { Pagination } from "../../components/Pagination";

export function Followers() {
  const { followers, handleNextPage, handlePreviousPage, page } = useFollowersController();

  return (
    <div className="followers-container">
      <ul>
        {followers?.map(follower => (
          <Follow
            key={follower.id}
            follower={{
              avatar_url: follower.avatar_url,
              login: follower.login
            }}
          />
        ))}
      </ul>
      {followers && followers.length > 0 && (
        <Pagination
          page={page}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          data={followers as []}
        />
      )}
    </div>
  );
}

import { useFollowingController } from "./useFollowingController";
import './style.scss';
import { Follow } from "../../components/Follow";
import { Pagination } from "../../components/Pagination";

export function Followings() {
  const { following, handleNextPage, handlePreviousPage, page } = useFollowingController();

  return (
    <div className="following-container">
      <ul>
        {following?.map(following => (
          <Follow
            key={following.id}
            follower={{
              avatar_url: following.avatar_url,
              login: following.login
            }}
          />
        ))}
      </ul>

      {following && following.length > 0 && (
        <Pagination
          page={page}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          data={following as []}
        />
      )}
    </div>
  );
}

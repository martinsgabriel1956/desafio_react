import { useFollowingController } from "./useFollowingController";
import { Follow } from "../../components/Follow";

export function Followings() {
  const { following, handleNextPage, handlePreviousPage, page } = useFollowingController();

  return (
    <>
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
      <div className="">
        <button
          onClick={handlePreviousPage}
          disabled={page <= 1}
        >
          Anterior
        </button>
        <span>{page}</span>
        <button
          onClick={handleNextPage}
          disabled={!following}
        >
          Proximo
        </button>
      </div>
    </>
  );
}

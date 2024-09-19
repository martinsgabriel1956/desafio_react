import { useFollowersController } from "./useFollowersController";
import { Follow } from "../../components/Follow";

export function Followers() {
  const { followers, handleNextPage, handlePreviousPage, page } = useFollowersController();

  return (
    <>
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
          disabled={!followers}
        >
          Proximo
        </button>
      </div>
    </>
  );
}

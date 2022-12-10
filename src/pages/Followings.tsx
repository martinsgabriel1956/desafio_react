import { useContext, useEffect, useState } from "react";

import { api } from "../services/api";

import { UserContext } from "../contexts/UserContext";
import { FollowTypes } from "../interfaces/FollowersTypes";
import { FollowList, Footer, Header } from "../components";

export function Followings() {
  const { data } = useContext(UserContext);
  const { login } = data;
  const [followingList, setFollowingList] = useState<FollowTypes[]>([]);

  useEffect(() => {
    async function getFollowing() {
      const response = await api.get(`${login}/following`);
      const data: FollowTypes[] = response.data;

      setFollowingList(data);
    }
    getFollowing();
  }, [login]);

  return (
    <>
      <Header type={`${followingList.length} Seguindo`} />
      <FollowList followArray={followingList} />
      <Footer />
    </>
  );
}

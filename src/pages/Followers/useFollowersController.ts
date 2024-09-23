import { useCallback, useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { useUser } from "../../@hooks/useUser";
import { Follower } from "./types";
import { queryClient } from "../../services/query-client";

type GetFollowersProps = {
  page: number;
}

export function useFollowersController() {
  const { data } = useUser();
  const [page, setPage] = useState(1);
  const { login } = data;

  function handleNextPage() {
    setPage(prevState => (followers ? prevState + 1 : prevState));
  }

  function handlePreviousPage() {
    setPage(prevState => (prevState > 1 ? prevState - 1 : prevState));
  }

  const getFollowers = useCallback(async ({page}: GetFollowersProps) => {
    const response = await api.get(`${login}/followers`, {
      params: {
        per_page: 10,
        page
      }
    });
    return response.data;
  }, [login]);

  const { data: followers, isPlaceholderData  } = useQuery<Follower[]>({
    queryKey: ["followers", page],
    queryFn: () => getFollowers({
      page
    }),
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    if (!isPlaceholderData && followers) {
      queryClient.prefetchQuery({
        queryKey: ['followers', page + 1],
        queryFn: () => getFollowers({ page: page + 1 }),
      })
    }
  }, [data, page, getFollowers, isPlaceholderData, followers]);

  return {
    followers,
    handleNextPage,
    handlePreviousPage,
    page
  }
}
import { useCallback, useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useUser } from "../../@hooks/useUser";
import { Following } from "./types";
import { api } from "../../services/api";
import { queryClient } from "../../services/query-client";

type GetFollowingProps = {
  page: number;
}

export function useFollowingController() {
  const { data } = useUser();
  const [page, setPage] = useState(1);
  const { login } = data;

  function handleNextPage() {
    setPage(prevState => (following ? prevState + 1 : prevState));
  }

  function handlePreviousPage() {
    setPage(prevState => (prevState > 1 ? prevState - 1 : prevState));
  }

  const getFollowing = useCallback(async ({page}: GetFollowingProps) => {
    const response = await api.get(`${login}/following?page=${page}`);
    return response.data;
  }, [login]);

  const { data: following, isPlaceholderData  } = useQuery<Following[]>({
    queryKey: ["following", page],
    queryFn: () => getFollowing({
      page
    }),
    placeholderData: keepPreviousData,
  })

  useEffect(() => {
    if (!isPlaceholderData && following) {
      queryClient.prefetchQuery({
        queryKey: ['following', page + 1],
        queryFn: () => getFollowing({ page: page + 1 }),
      })
    }
  }, [data, page, getFollowing, isPlaceholderData, following]);

  return {
    following,
    handleNextPage,
    handlePreviousPage,
    page
  }
}
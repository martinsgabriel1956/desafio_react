import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useUser } from "../../@hooks/useUser";
import { api } from "../../services/api";
import { useCallback, useEffect, useState } from "react";
import { queryClient } from "../../services/query-client";

type GetRepositoryProps = {
  page: number;
}

export function useRepositoriesController() {
    const { data } = useUser();
    const [page, setPage] = useState(1);
    const { login } = data;

    function handleNextPage() {
      setPage(prevState => (repositories ? prevState + 1 : prevState));
    }

    function handlePreviousPage() {
      setPage(prevState => (prevState > 1 ? prevState - 1 : prevState));
    }

    const getRepositories = useCallback(async ({page}: GetRepositoryProps) => {
      const response = await api.get(`${login}/repos`, {
        params: {
          page,
          per_page: 10
        }
      });
      return response.data;
    }, [login]);

    const { data: repositories, isPlaceholderData } = useQuery({
      queryKey: ["repos", page],
      queryFn: () => getRepositories({
        page
      }),
      placeholderData: keepPreviousData
    })

    useEffect(() => {
      if (!isPlaceholderData && repositories) {
        queryClient.prefetchQuery({
          queryKey: ['repos', page + 1],
          queryFn: () => getRepositories({ page: page + 1 }),
        })
      }
    }, [data, page, getRepositories, isPlaceholderData, repositories]);

    return { repositories, handlePreviousPage, handleNextPage, page };
}

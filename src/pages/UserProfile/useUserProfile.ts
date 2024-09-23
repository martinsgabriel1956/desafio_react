import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../@hooks/useUser";
import { api } from "../../services/api";
import { queryClient } from "../../services/query-client";

export function useUserProfile() {
  const { loginNewUser } = useUser();
  const params = useParams();
  const navigate = useNavigate();
  const { username } = params;

  const getProfileData = async (username: string) => {
    const response = await api.get(`${username}`);
    return response.data;
  };

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfileData(username!),
  });

  function handleClick() {
    loginNewUser(username!);
    queryClient.removeQueries({ 'queryKey': ['profile', 'followers', 'following', 'repos'] });
    localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE');
    navigate("/home");
  }

  return {
    data,
    handleClick
  }
}
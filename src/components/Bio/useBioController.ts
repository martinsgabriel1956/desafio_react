import { useUser } from "../../@hooks/useUser";

export function useBioController() {
  const { data } = useUser();

  return {
    data
  }
}
import { ReactElement } from "react";

export type UserContextType = {
  data: {
    login: string;
    avatar_url: string;
    name: string;
    email: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
    bio: string;
  };
  login: (username: string) => Promise<void>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserContextProviderTypes = {
  children: ReactElement;
};

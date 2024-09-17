import { ReactElement } from "react";

export type User = {
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

export type UserContextType = {
  data: User;
  login: (username: string) => Promise<void>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

export type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export type UserContextProviderTypes = {
  children: ReactElement;
};

export type ThemeContextProviderTypes = {
  children: ReactElement;
};
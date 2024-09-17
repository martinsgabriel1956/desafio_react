import { useTheme } from "../../@hooks/useTheme"

export function useToggleThemeButtonController() {
  const { theme, toggleTheme } = useTheme();
  
  return {
    theme,
    toggleTheme
  }
}
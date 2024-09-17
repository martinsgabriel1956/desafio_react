import { useToggleThemeButtonController } from "./useToggleThemeButtonController";
import './style.scss';

export function ToggleThemeButton() {
  const { toggleTheme } = useToggleThemeButtonController();

  return (
    <button
      type="button"
      className="toggle-theme-button"
      onClick={toggleTheme}
    >
      Change
    </button>
  )
}
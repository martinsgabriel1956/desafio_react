import { useLocation } from "react-router-dom";

export function HomeIcon() {
  const { pathname } = useLocation();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      stroke={pathname === "/profile/home" ? "#000" : "#969696"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-home"
      viewBox="0 0 24 24"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
      <path d="M9 22L9 12 15 12 15 22"></path>
    </svg>
  );
}
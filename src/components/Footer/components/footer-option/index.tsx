import { ElementType } from "react";
import { Link, useLocation } from "react-router-dom";

type FooterOptionsProps = {
  path: string;
  Icon: ElementType;
  text: string;
}

export function FooterOption({ path, Icon, text }: FooterOptionsProps) {
  const { pathname } = useLocation();

  return (
    <Link to={path} className="tab-buttons">
      <Icon />
      <p className={`${path === pathname ? 'active' : ''}`}>{text}</p>
    </Link>
  )
}
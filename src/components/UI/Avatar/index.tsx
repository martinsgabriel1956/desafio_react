import { Container } from "./styles";
import { AvatarProps } from "./types";

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Container src={src}  />
  );
};
import styled from "styled-components";
import { AvatarProps } from "./types";

export const Container = styled.img<AvatarProps>`
  width: 5.625rem;
  border-radius: 75%;
  border: 4px solid var(--white-color);
  margin-bottom: 2rem;
  position: absolute;
  top: -12%;
  left: 45%;

  @media (max-width: 768px) {
    top: -8%;
    left: calc(42% - 10px);
  }
`;

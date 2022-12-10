import styled from "styled-components";

export const Container = styled.ul``;

export const FollowContent = styled.li`
  padding: 2.5rem 0;
  background: #292929;
  border-bottom: 1px solid #7070705a;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;

  &::before {
    content: "";
    width: 40px;
    height: 40px;
    background: #ffce00;
    border-radius: 8px;

    position: absolute;
    left: -30px;
  }

  & > img {
    margin: 0 0.25rem;

    &:last-child {
      width: 1.625rem;
      color: #fff;
    }
  }

  & > p {
    margin: 0 1rem;
    font-weight: bold;
  }

  @media (max-width: 375px) {
    padding: 2.5rem 1rem;
  }
`;

export const Avatar = styled.img`
  width: 3.75rem;
  border: 3px solid #fff;
  border-radius: 50%;
`;

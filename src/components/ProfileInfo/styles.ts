import styled from "styled-components";

export const BioContainer = styled.main`
  background: #292929;
  position: relative;
  width: 100%;
`;

export const UserInfo = styled.div`
  padding-top: 6rem;
  padding-bottom: 2rem;
  align-items: flex-start;
  padding-left: 1rem;

  & > img {
    width: 90px;
    border-radius: 75%;
    border: 4px solid var(--white-color);
    margin-bottom: 2rem;
    position: absolute;
    top: -12%;
    left: 45%;

    @media(max-width: 768px) {
      top: -8%;
      left: calc(42% - 10px);
    }
  }

  & > p {
    @media(max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  & > h2 {
    position: relative;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 8px;

    &::before {
      content: "";
      width: 30px;
      height: 30px;
      background: #ffce00;
      border-radius: 6px;

      position: absolute;
      top: -4px;
      left: -38px;
    }
  }
`;

export const Bio = styled.div`
  padding-top: 2rem;
  padding-bottom: 13rem;
  align-items: flex-start;
  padding-left: 1rem;

  & > h2 {
    position: relative;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 8px;

    &::before {
      content: "";
      width: 30px;
      height: 30px;
      background: #ffce00;
      border-radius: 6px;

      position: absolute;
      top: -4px;
      left: -38px;
    }
  }

  @media(max-width: 768px) {
    padding-bottom: 6rem;
    font-size: 14px;
  }

  `;

export const Statics = styled.div`
  background: #525252;
  padding: 1.25rem 4rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  @media(max-width: 768px) {
    padding: 1.25rem .75rem;
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h2 {
    line-height: 1.75rem;
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 30px 0;
  z-index: 100;
  line-height: 1.3;
  @media screen and (max-width: 500px) {
    min-width: 320px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  text-align: center;
  color: #444;

  & > .contact {
    font-size: 1.4rem;
    font-weight: 500;
  }

  & > .copy {
    font-size: 1.2rem;
    color: #686868;
  }

  @media screen and (max-width: 500px) {
  }
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    background-color: #333;
    border-radius: 50%;
    cursor: pointer;

    & > svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

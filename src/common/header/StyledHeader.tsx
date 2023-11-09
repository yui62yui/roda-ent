import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 980px;
  height: 80px;
  padding: 0rem 4rem;
  background-color: #fff;
  color: #222;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media screen and (max-width: 500px) {
    min-width: 320px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  width: 60px;
  height: 60px;
  background: url(${process.env.PUBLIC_URL}/image/roda-ent-icon.png) no-repeat
    center / cover;
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  width: 100%;
  gap: 4rem;

  & > a {
    position: relative;
    color: #222;
    font-size: 2rem;
    font-weight: 500;
    transition: all 0.3s ease;

    @media screen and (max-width: 500px) {
      font-size: 1.6rem;
    }
  }

  & > a:hover {
    color: #999;
    transform: scale(105%);
  }
  & > a.activated::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    transform: translate(-9%);
    width: 120%;
    height: 2px;
    background-color: #666;
    transition: all 0.3s ease;
  }

  & > a.activated:hover::after {
    background-color: #999;
  }

  @media screen and (max-width: 500px) {
    justify-content: flex-end;
    gap: 1.5rem;
  }
`;

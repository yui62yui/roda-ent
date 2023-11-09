import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  min-width: 980px;
  margin-top: 80px;
  background-color: #fefefe;

  @media screen and (max-width: 500px) {
    min-width: 320px;
  }
`;

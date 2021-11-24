import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    font-weight: 700;
    margin-top: 10vh;
    margin-bottom: 6vh;
    font-size: 18px;
  }

  span {
    background-color: var(--purple);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const Content = styled.div`
  border: 1px solid var(--grey0);
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 5vh;
    height: 7vh;
    border: none;
    background-color: var(--grey0);
    padding-left: 1vh;
  }

  button {
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  p {
    font-size: 12px;
    width: 70vw;
  }
`;

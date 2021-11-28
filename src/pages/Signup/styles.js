import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h1 {
    font-weight: 700;
    margin-top: 10vh;
    margin-bottom: 6vh;
    font-size: 22px;
  }

  span {
    background-color: var(--purple);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    font-size: 20px;
  }

  a {
    margin-top: 2vh;
    padding-bottom: 15px;
  }
`;

export const Content = styled.div`
  border: 1px solid var(--grey0);
  width: 90vw;
  max-width: 500px;
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
    max-width: 250px;
  }

  p {
    font-size: 12px;
    width: 70vw;
  }
`;

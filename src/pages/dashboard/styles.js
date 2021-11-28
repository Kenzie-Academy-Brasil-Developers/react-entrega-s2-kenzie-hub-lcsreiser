import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .title {
    font-weight: 700;
    margin: 10vh 0;
    font-size: 22px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  span {
    background-color: var(--purple);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    font-size: 20px;
  }

  input {
    margin-bottom: 5vh;
    height: 7vh;
    border: none;
    background-color: var(--grey0);
    padding-left: 1vh;
  }

  p {
    font-size: 12px;
    width: 70vw;
  }

  .buttonTec {
    margin-bottom: 20vh;
  }

  .buttonLogout {
    margin-top: 5vh;
    margin-bottom: 5vh;
    background-color: #403caa91;
    width: 50%;
  }
`;
export const Content = styled.div`
  border: 1px solid var(--grey0);
  width: 90vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

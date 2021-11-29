import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--purple);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 100px;
  padding: 16px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid black;
  color: whitesmoke;
  margin: 2vh 0;

  button {
    height: 16px;
    font-size: 12px;
    background: transparent;
    color: white;
    border: none;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 12px;
  }
`;

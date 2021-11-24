import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => (props.whiteSchema ? "#F5F5F5" : "#403CAA")};
  color: ${(props) => (props.whiteSchema ? "#999999" : "#FFFFFF")};
  border-radius: 8px;
  border: none;
  width: 80vw;
  height: 7vh;
  :hover {
    border: 2px solid var(--purple);
  }
`;

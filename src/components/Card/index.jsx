import { Container } from "./styles";

const Card = ({ title, status, deleteTec }) => {
  return (
    <Container>
      <span>
        <h2>{title}</h2>
        <h4>{status}</h4>
      </span>

      <button onClick={deleteTec}>Excluir</button>
    </Container>
  );
};

export default Card;

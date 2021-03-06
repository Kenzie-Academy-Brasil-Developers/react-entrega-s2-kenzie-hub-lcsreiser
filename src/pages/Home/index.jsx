import { Redirect, useHistory } from "react-router";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavegation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>
        Kenzie <span>Hub</span>
      </h1>

      <Content>
        <Button onClick={() => handleNavegation("/login")}>Logar</Button>
        <p>Criar uma Página para mostrar suas habilidades metas e progresso</p>
        <Button onClick={() => handleNavegation("/signup")} whiteSchema>
          Cadastrar
        </Button>
      </Content>
    </Container>
  );
};

export default Home;

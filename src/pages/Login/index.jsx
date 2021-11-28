import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response.data);

        const { token } = response.data;
        const { user } = response.data;

        localStorage.clear();

        localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@kenzieHub:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => console.log(err));
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
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <Button type="submit">Logar</Button>
        </form>
      </Content>
      <Link to="/signup">Não possui uma conta?</Link>
    </Container>
  );
};

export default Login;

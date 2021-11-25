import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useHistory, Redirect } from "react-router";
import { Link } from "react-router-dom";

const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    confirmEmail: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("email")], "E-mail diferente"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senha diferente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const user = { email, password, name, bio, contact, course_module };

    console.log(user);

    api
      .post("/users", user)
      .then((response) => {
        console.log(response.data);
        return history.push("/");
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
          <input placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>
          <input placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <input
            placeholder="Confirme seu email"
            {...register("confirmEmail")}
          />
          <p>{errors.confirmEmail?.message}</p>
          <input placeholder="Bio" {...register("bio")} />
          <p>{errors.bio?.message}</p>
          <input placeholder="Contato" {...register("contact")} />
          <p>{errors.contact?.message}</p>
          <input
            placeholder="Selecione o módulo"
            {...register("course_module")}
          />
          <p>{errors.module?.message}</p>
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <input
            placeholder="Confirme sua senha"
            type="password"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
      <Link to="/login"> Já tem uma conta?</Link>
    </Container>
  );
};

export default Signup;

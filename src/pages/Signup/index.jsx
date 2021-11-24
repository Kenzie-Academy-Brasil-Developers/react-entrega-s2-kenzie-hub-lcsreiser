import { Container, Content } from "./styles";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    confirmEmail: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("email")], "Email diferente"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    module: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirm: yup
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

  console.log(errors);

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>
        Kenzie <span>Hub</span>
      </h1>

      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input type="text" placeholder="Nome" {...register("name")} />
          <input type="email" placeholder="Email" {...register("email")} />
          <input
            type="email"
            placeholder="Confirme seu email"
            {...register("confirmEmail")}
          />
          <input type="text" placeholder="Bio" {...register("bio")} />
          <input type="number" placeholder="Contato" {...register("contact")} />
          <input
            type="text"
            placeholder="Selecione o módulo"
            {...register("module")}
          />
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
        </form>
        <Button type="submit">Cadastrar</Button>
      </Content>
    </Container>
  );
};

export default Signup;

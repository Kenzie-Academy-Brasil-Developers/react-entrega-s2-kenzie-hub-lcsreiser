import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router";
import { Container, Content } from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    status: yup.string().required(),
  });

  const [techs, setTechs] = useState([]);

  const token = JSON.parse(localStorage.getItem("@kenzieHub:token")) || "";

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const user = JSON.parse(localStorage.getItem("@kenzieHub:user")) || "";

  const { id } = user;

  const loadTechnology = () => {
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(response.data.techs))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTechnology();
  }, []);

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => loadTechnology())
      .catch((err) => console.log(err));
  };

  const deleteTec = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setTechs(techs.filter((technology) => technology.id !== id));
        loadTechnology();
      })
      .catch((err) => console.log(err));
  };

  const history = useHistory();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const Logout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <Container>
      <h2 className="title">Minhas Tecnologias</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Tecnologia" {...register("title")} />
        <input placeholder="Status" {...register("status")} />
        <Button className="buttonTec" type="submit">
          Adicionar tecnologia
        </Button>
      </form>
      <Content>
        {techs.map((technology) => (
          <Card
            key={technology.id}
            title={technology.title}
            status={technology.status}
            deleteTec={() => deleteTec(technology.id)}
          />
        ))}
      </Content>
      <Button className="buttonLogout" onClick={Logout}>
        Logout
      </Button>
      <hr />
    </Container>
  );
};

export default Dashboard;

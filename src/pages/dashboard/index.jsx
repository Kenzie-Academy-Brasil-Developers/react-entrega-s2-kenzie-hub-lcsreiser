import { Redirect } from "react-router";

const Dashboard = ({ authenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return <div>dashboard</div>;
};

export default Dashboard;

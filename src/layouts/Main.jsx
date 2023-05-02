import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;

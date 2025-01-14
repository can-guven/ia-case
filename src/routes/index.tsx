import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./main";

const Router = () => {
  return useRoutes([...mainRoutes]);
};

export default Router;

/** Dependencies */
import { useRoutes } from "react-router-dom";

/** Routes */
import { mainRoutes } from "./main";

const Router = () => {
  return useRoutes([...mainRoutes]);
};

export default Router;

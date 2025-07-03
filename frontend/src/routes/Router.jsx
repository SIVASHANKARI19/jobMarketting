import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default routes;

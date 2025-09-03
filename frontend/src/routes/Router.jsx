import { Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import FeedPage from "../pages/Feed";
import AdminDashboard from "../pages/AdminDashboard";
import HomePage from "../pages/Home"; // ✅ import your real homepage

const router = (isAuthenticated, currentUser, handleLogin) => [
  {
    path: "/",
    element: !isAuthenticated ? <HomePage /> : <Navigate to="/feed" />,
  },
  {
    path: "/register",
    element: !isAuthenticated ? (
      <RegisterPage onLogin={handleLogin} />
    ) : (
      <Navigate to="/feed" />
    ),
  },
  {
    path: "/login",
    element: !isAuthenticated ? (
      <LoginPage onLogin={handleLogin} />
    ) : (
      <Navigate to="/feed" />
    ),
  },
  ...(isAuthenticated
    ? [
        { path: "/feed", element: <FeedPage /> },

        ...(currentUser?.role === "admin"
          ? [{ path: "/admin-dashboard", element: <AdminDashboard /> }]
          : []),

        { path: "*", element: <Navigate to="/feed" /> },
      ]
    : [{ path: "*", element: <Navigate to="/" /> }]),
];

export default router;

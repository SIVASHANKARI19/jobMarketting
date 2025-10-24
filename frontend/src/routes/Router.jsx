import { Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import FeedPage from "../pages/Feed";
import AdminDashboard from "../pages/AdminDashboard";
import HomePage from "../pages/Home";
import Resume from "../pages/client/Resume";
import Courses from "../pages/client/Courses";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import TermsPage from "../pages/TermsPage";
import PostJobPage from "../pages/JobPostPage";

const router = (isAuthenticated, currentUser, handleLogin) => [
  {
    path: "/",
    element: !isAuthenticated ? <HomePage /> : <Navigate to="/feed" />,
  },
  {
    path : '/resume',
    element : isAuthenticated ? <Resume /> : <Navigate to ="/login" />
  },
  {
    path: "/courses",
    element: isAuthenticated ? <Courses /> : <Navigate to="/login" />,
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
        { path: "/feed", element: <FeedPage /> ,
        },
        {
          path:"/contact",element:<ContactUsPage/>
        },
        {
 path:"/about",element:<AboutUsPage/>
        },
        {
           path:"/terms",element:<TermsPage/>
        },

        ...(currentUser?.role === "admin"
          ? [{ path: "/admin-dashboard", element: <AdminDashboard /> }]
          : []),

        { path: "*", element: <Navigate to="/feed" /> },
      ]
    : [{ path: "*", element: <Navigate to="/" /> }]),
    ...(currentUser?.role ==="client" ?
    [{path:"/post-job",element:<PostJobPage />}]:[]),
];

export default router;

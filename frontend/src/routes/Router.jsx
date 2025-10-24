import { Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import FeedPage from "../pages/Feed";
import SkillGapAnalyzer from "../pages/skillGapAnalyser/skill_gap";
import AdminDashboard from "../pages/AdminDashboard";
import HomePage from "../pages/Home"; // ✅ import your real homepage
import JobTrendsPage from "../components/JobTrends/JobTrendsPage";
import CourseRecommendationsPage from "../pages/CourseRecommendations";
import Resume from "../pages/client/Resume";

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
  {
    path:'/skill-gap-analyzer',
    element:<SkillGapAnalyzer/>
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
 
  {
    path: '/job-trends',
    element: <JobTrendsPage />,
  },
  {
    path: '/courses',
    element: <CourseRecommendationsPage />,
  },
];

export default router;

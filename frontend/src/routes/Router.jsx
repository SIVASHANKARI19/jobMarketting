import { Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import FeedPage from "../pages/Feed";
import SkillGapAnalyzer from "../pages/skillGapAnalyser/skill_gap";
import AdminDashboard from "../pages/AdminDashboard";
import HomePage from "../pages/Home"; // ✅ import your real homepage
<<<<<<< HEAD
import JobTrendsPage from "../components/JobTrends/JobTrendsPage";
<<<<<<< HEAD
import Resume from "../pages/client/Resume";
=======
import TestIntegration from "../test-integration";
>>>>>>> 553b45a276abc22758aa5b3752085055b232a6e5
=======
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import TermsPage from "../pages/TermsPage";
>>>>>>> 34bc275bec8519787d78172ac14b5cb5c3695c86

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
 
  {
    path: '/job-trends',
    element: <JobTrendsPage />,
  },
  {
    path: '/test-integration',
    element: <TestIntegration />,
  },
];

export default router;

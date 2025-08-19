import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/TopNavBar";
import Sidebar from "./components/Sidebar";
import RegisterPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import FeedPage from "./pages/Feed";
import SavedJobsPage from "./pages/SavedJobsPage";
import AppliedJobsPage from "./pages/AppliedJobsPage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import PostJobPage from "./pages/PostJobPage";
import MyJobsPage from "./pages/MyJobsPage";
import ApplicantsPage from "./pages/ApplicantsPage";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsersPage from "./pages/ManageUsersPage";
import ManageJobsPage from "./pages/ManageJobsPage";
import ReportsPage from "./pages/ReportsPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/Home";
import TermsPage from "./pages/TermsPage";

import usersData from "./data/users.json";
import { Home } from "lucide-react";

function App() {
  const [currentUser, setCurrentUser] = useState("jobseeker");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const handleRoleChange = (newRole) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, role: newRole };
      const roleBasedUser = usersData.find((u) => u.role === newRole) || updatedUser;
      setCurrentUser({ ...updatedUser, ...roleBasedUser });
    }
  };

  return (
   
      <div className="min-h-screen bg-gray-50">
        {isAuthenticated && (
          <>
            <Header
              currentUser={currentUser}
              onRoleChange={handleRoleChange}
              onLogout={handleLogout}
            />
            <Sidebar currentUser={currentUser} />
          </>
        )}

        <div className={isAuthenticated ? "ml-64 pt-16" : ""}>
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                !isAuthenticated ? <HomePage /> : <Navigate to="/feed" />
              }
            />
            <Route
              path="/register"
              element={
                !isAuthenticated ? (
                  <RegisterPage onLogin={handleLogin} />
                ) : (
                  <Navigate to="/feed" />
                )
              }
            />
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <LoginPage onLogin={handleLogin} />
                ) : (
                  <Navigate to="/feed" />
                )
              }
            />

            {/* Protected Routes */}
            {isAuthenticated ? (
              <>
                {/* Common Routes */}
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/job/:id" element={<JobDetailsPage />} />
                <Route path="/company/:id" element={<CompanyProfilePage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/terms" element={<TermsPage />} />

                {/* Job Seeker Routes */}
                {currentUser?.role === "jobseeker" && (
                  <>
                    <Route path="/saved-jobs" element={<SavedJobsPage />} />
                    <Route path="/applied-jobs" element={<AppliedJobsPage />} />
                  </>
                )}

                {/* Client Routes */}
                {currentUser?.role === "client" && (
                  <>
                    <Route path="/post-job" element={<PostJobPage />} />
                    <Route path="/my-jobs" element={<MyJobsPage />} />
                    <Route path="/applicants" element={<ApplicantsPage />} />
                  </>
                )}

                {/* Admin Routes */}
                {currentUser?.role === "admin" && (
                  <>
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/manage-users" element={<ManageUsersPage />} />
                    <Route path="/manage-jobs" element={<ManageJobsPage />} />
                    <Route path="/reports" element={<ReportsPage />} />
                  </>
                )}

                {/* Fallback for authenticated users */}
                <Route path="*" element={<Navigate to="/feed" />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </div>
      </div>
 
  );
}

export default App;

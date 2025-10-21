import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom"; // ⬅️ no BrowserRouter here
import Header from "./components/TopNavBar";
import Sidebar from "./components/Sidebar";
import usersData from "./data/users.json";
import router from "./routes/Router";
import SkillGapAnalyser from "./components/SkillGap/SkillAnalysis"; // Skill Gap component
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle login
  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  // Handle role change
  const handleRoleChange = (newRole) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, role: newRole };
      const roleBasedUser =
        usersData.find((u) => u.role === newRole) || updatedUser;
      setCurrentUser({ ...updatedUser, ...roleBasedUser });
    }
  };

  // Generate routes
  const routes = useMemo(
    () => router(isAuthenticated, currentUser, handleLogin),
    [isAuthenticated, currentUser]
  );

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Header & Sidebar only if authenticated */}
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

        {/* Routes container with proper sidebar offset */}
        <div className={isAuthenticated ? "ml-64 pt-16" : ""}>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}

            {/* Skill Gap Analyser Route */}
            {isAuthenticated && (
              <Route
                path="/skill-gap-analyser"
                element={<SkillGapAnalyser />}
              />
            )}
          </Routes>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;

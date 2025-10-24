import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom"; // ⬅️ no BrowserRouter here
import Header from "./components/TopNavBar";
import Sidebar from "./components/Sidebar";
import ChatbotCard from "./components/SkillGap/ChatbotCard";
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

      <div className={isAuthenticated ? "ml-64 pt-16" : ""}>
        <Routes>
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
        </Routes>
        {/* Global chatbot that appears on every page */}
        <ChatbotCard
          title="Career AI Assistant"
          subtitle="Ask anything about resumes, skills, jobs, and learning"
          accent="blue"
          suggestions={[
            'How can I increase my resume score?',
            'What jobs match my skills?',
            'Recommend courses for React',
          ]}
        />
      </div>
       </div>
    </ErrorBoundary>
  )
}
  

export default App;

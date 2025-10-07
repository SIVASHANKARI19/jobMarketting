import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";  // ⬅️ no BrowserRouter here
import Header from "./components/TopNavBar";
import Sidebar from "./components/Sidebar";
import usersData from "./data/users.json";
import router from "./routes/Router";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
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
      const roleBasedUser =
        usersData.find((u) => u.role === newRole) || updatedUser;
      setCurrentUser({ ...updatedUser, ...roleBasedUser });
    }
  };

  const routes = useMemo(
    () => router(isAuthenticated, currentUser, handleLogin),
    [isAuthenticated, currentUser]
  );

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
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;

import  { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const TopNavbar = () => {
  const [name, setName] = useState(() => {
    const user = localStorage.getItem("user");
    return JSON.parse(user)?.name?.toUpperCase() || "Username";   
  });

  // Example function to simulate login and set user name
  const handleLogin = () => {
    const newUser = { name: "John Doe" };
    localStorage.setItem("user", JSON.stringify(newUser));
    setName(newUser.name.toUpperCase());
  };

  const Title = () => {
    switch (window.location.pathname) {
      case "/":
        return "Dashboard";
      default:
        return (
          window.location.pathname.replace("/", "").charAt(0).toUpperCase() +
          window.location.pathname.replace("/", "").slice(1)
        );
    }
  };

  return (
    <div className="fixed top-0.5 left-0 w-full">
      <div className="flex items-center justify-between h-[10%] px-5 bg-gray-100 text-gray-800">
        <div>
          <h3>{Title()}</h3>
        </div>
        <div className="flex items-center justify-between w-[20vw] cursor-pointer">
          <h3 className="font-medium">{name}</h3>
          <div className="p-2">
            <FaUserCircle size={50} />
          </div>
          {/* Example login button */}
          <button onClick={handleLogin} className="ml-4 px-2 py-1 bg-blue-500 text-white rounded">
            Simulate Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
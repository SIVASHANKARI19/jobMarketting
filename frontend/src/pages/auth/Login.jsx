import  { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import loginImg from "../../assets/login.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const loginGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Google OAuth Response:", response);
      try {
        const userInfo = await axios.get(
          `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${response.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
              Accept: "application/json",
            },
          }
        );
        console.log("User Info:", userInfo.data);
        navigate("/register");
      } catch (error) {
        console.error("Error:", error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", formData);
  };

  const handleLinkedInLogin = () => {
    console.log("LinkedIn login clicked");
  };

  const handleGitHubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <div className=" max-h-screen px-6 flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white rounded-xl p-9 shadow-lg overflow-hidden gap-10">
        {/* Left - Form */}
        <div className="flex flex-col  flex-1 w-120 p-3 ">
          <h1 className="text-4xl font-medium mb-6 text-gray-500 w-1.5xl text-left">
            Welcome to your professional community
          </h1>

          <p className="text-gray-500 mb-8">Sign in to your account</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex flex-col gap-8.5">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
                name="username"
                label="Username"
                variant="outlined"
                size="small"
                value={formData.username}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser className="text-gray-400" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
                size="small"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={formData.password}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock className="text-gray-400" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-[#0077b5] text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full   py-2 bg-[#0077b5] hover:bg-[#005983] text-white rounded-md font-semibold transition-colors"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <IconButton
              onClick={loginGoogle}
              className="!w-14 !h-14 border border-gray-300 bg-white hover:bg-gray-100 transition"
            >
              <GoogleIcon sx={{ color: "#db4437", fontSize: 28 }} />
            </IconButton>

            <IconButton
              onClick={handleLinkedInLogin}
              className="!w-14 !h-14 border border-[#0077b5] bg-white hover:bg-[#e6f4f9] transition"
            >
              <LinkedInIcon sx={{ color: "#0077b5", fontSize: 28 }} />
            </IconButton>

            <IconButton
              onClick={handleGitHubLogin}
              className="!w-14 !h-14 border border-gray-300 bg-white hover:bg-gray-100 transition"
            >
              <GitHubIcon sx={{ color: "#333", fontSize: 28 }} />
            </IconButton>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[#0077b5] font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Right - Image */}
        <div className="">
          <img src={loginImg} alt="Login" height={200} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="286738810479-tc3ud6suip3p4i680vikq77rhhm6sk3b.apps.googleusercontent.com">
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);

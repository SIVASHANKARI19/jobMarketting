
import routes from "./routes/Router";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Routes>
        {routes.map((routes, i) => (
          <Route key={i} path={routes.path} element={routes.element} />
        ))}
      </Routes>
    </div>
  );
}

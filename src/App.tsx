import "./App.css";
import useAuth from "./custom-hooks/useAuth";
import { Routes, Route } from "react-router-dom";
import Auth from "./modules/auth/Auth";
import { LOGIN_PAGE, MAIN_PAGE } from "./routes/all-routes";
import Main from "./modules/main/Main";

function App() {
  const isAuth = useAuth();

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      {isAuth && (
        <Routes>
          <Route path={LOGIN_PAGE} element={<Auth />} />
        </Routes>
      )}

      {!isAuth && (
        <Routes>
          <Route path={MAIN_PAGE} element={<Main />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/layouts/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

// export const AuthContext = createContext(null);

// const userInfo = {
//   email: 'pot@alu.com'
// }

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthContext value={userInfo}>
    <RouterProvider router={router}/>
    </AuthContext> */}

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

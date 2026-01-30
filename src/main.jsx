import { StrictMode } from "react";
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
import Orders from "./components/Orders/Orders.jsx";
import Profile from "./components/Profile/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {
        path: "orders", 
        // Component: Orders
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      
      },
      {
        path: "profile", 
        // Component: Profile,
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

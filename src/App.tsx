import "./App.css";
import React from "react";
import Login from "screens/Login";
import Dashboard from "screens/Dashboard";
import NotFound from "screens/NotFound";
import ProtectedRoute from "components/ProtectedRoute";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

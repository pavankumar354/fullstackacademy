// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // 🚫 Not logged in, redirect to /signup (or /login if you have it)
    return <Navigate to="/signup" replace />;
  }

  // ✅ Logged in, allow access
  return children;
};

export default ProtectedRoute;

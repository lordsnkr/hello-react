import { Navigate } from "react-router-dom";
import { FC } from "react";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const authenticated = localStorage.getItem("authenticated");

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;

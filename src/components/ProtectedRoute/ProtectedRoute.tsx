import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const authenticated = localStorage.getItem("authenticated");

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;

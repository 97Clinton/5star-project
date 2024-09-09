import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { ReactNode } from 'react';

function PrivateRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  // If no user is logged in, redirect to the sign-in page
  if (!user) {
    return <Navigate to="/auth/signin" replace />;
  }

  // If the user is logged in, render the children components (protected routes)
  return children;
}

export default PrivateRoute;

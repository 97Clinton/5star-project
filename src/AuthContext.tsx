import { createContext, useContext, useState, ReactNode } from 'react';

// Define the AuthContext type
interface AuthContextType {
  user: { username: string } | null;
  signIn: (userData: { username: string }) => void;
  signOut: () => void;
}

// Provide default values to avoid TypeScript errors
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ username: string } | null>(null);

  const signIn = (userData: { username: string }) => {
    setUser(userData);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  // Ensure that the context is defined
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;  // Now, context includes user, signIn, signOut
}

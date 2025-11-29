import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // Load saved login session from localStorage
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem("auth");
    return saved ? JSON.parse(saved) : { user: null, role: null, token: null };
  });

  // Whenever auth changes, save it
  useEffect(() => {
    if (auth && auth.token) {
      localStorage.setItem("auth", JSON.stringify(auth));
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);

  // Logout function
  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({ user: null, role: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

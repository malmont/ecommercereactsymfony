import React, { createContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants/apiConstants';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}validate-token`, {
          method: 'GET',
          credentials: 'include',
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'success') {
            setUser({ token: true }); 
          }
        } else {
          setUser(null); 
        }
      } catch (error) {
        console.error('Erreur lors de la validation du token', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          platform: 'web', 
        }),
        credentials: 'include', 
      });

      if (response.ok) {
        setUser({ token: true });
      } else {
        const data = await response.json();
        throw new Error(data.detail || 'Failed to login');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

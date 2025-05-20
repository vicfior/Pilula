import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStoredUser();
  }, []);

  async function loadStoredUser() {
    try {
      const storedUser = await AsyncStorage.getItem('@Pilula:user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn({ email, password }) {
    try {
      // TODO: Implementar chamada à API
      // Por enquanto, vamos simular um login bem-sucedido
      const userData = {
        id: '1',
        name: 'Usuário Teste',
        email,
        phone: '',
        userType: 'caregiver',
      };

      await AsyncStorage.setItem('@Pilula:user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  }

  async function signUp({ name, email, phone, password, userType }) {
    try {
      // TODO: Implementar chamada à API
      // Por enquanto, vamos simular um cadastro bem-sucedido
      const userData = {
        id: '1',
        name,
        email,
        phone,
        userType,
      };

      await AsyncStorage.setItem('@Pilula:user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      throw new Error('Erro ao fazer cadastro');
    }
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem('@Pilula:user');
      setUser(null);
    } catch (error) {
      throw new Error('Erro ao fazer logout');
    }
  }

  async function updateUser(updatedData) {
    try {
      const updatedUser = {
        ...user,
        ...updatedData,
      };

      await AsyncStorage.setItem('@Pilula:user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      throw new Error('Erro ao atualizar usuário');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
} 
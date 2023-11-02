import React from 'react';
import useFetch from '../hooks/useFetch';

interface InitialUserContext {
  data: User|null;
  error: string|null;
  loading: boolean;
}

interface PropsUserContextProvider {
  children: React.ReactNode;
  userUrl: string;
}

export const UserContext = React.createContext<InitialUserContext|null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error('useContext deve estar dentro do Provider');
  return context;
};

export const UserContextProvider = ({children, userUrl}:PropsUserContextProvider) => {
  const {data, error, loading} = useFetch<User>(`${userUrl}`);

  return (
    <UserContext.Provider value={{data, error, loading}}>
      {children}
    </UserContext.Provider>
  );
}
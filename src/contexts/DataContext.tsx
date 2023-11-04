import React from 'react';
import useFetch from '../hooks/useFetch';

interface InitialDataContext {
  data: Venda[] | null;
  loading: boolean;
  error: string | null;
}

const DataContext = React.createContext<InitialDataContext|null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if(!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
}

export const DataContextProvider = ({children}:{children:React.ReactNode}) => {
  const {data, loading, error} = useFetch<Venda[]>('https://data.origamid.dev/vendas/')
  return <DataContext.Provider value={{data, loading, error}}>
    {children}
  </DataContext.Provider>
}
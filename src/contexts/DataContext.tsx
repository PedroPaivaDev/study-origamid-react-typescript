import React from 'react';
import useFetch from '../hooks/useFetch';

interface InitialDataContext {
  data: Venda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  final: string;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = React.createContext<InitialDataContext|null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if(!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
}

function getDate(n:number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2,'0'); //para adicionar um zero antes, caso a string tiver length menor do que dois
  const mm = String(date.getMonth() + 1).padStart(2,'0'); //janeiro começa em zero, então nós vamos adicionar 1 para ficar refente ao mes 1
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({children}:{children:React.ReactNode}) => {
  const [inicio, setInicio] = React.useState(getDate(14));
  const [final, setFinal] = React.useState(getDate(0));

  const {data, loading, error} = useFetch<Venda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  )

  return <DataContext.Provider value={{
    data, loading, error, inicio, setInicio, final, setFinal
  }}>
    {children}
  </DataContext.Provider>
}
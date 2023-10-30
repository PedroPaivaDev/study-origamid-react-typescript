import React from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url:URL, options:RequestInit|undefined):FetchState<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error|null>(null);

  React.useEffect(() => {
    const abortController = new AbortController(); //para evitar requisições desnecessárias, quando o usuário entra em uma página e logo em seguida acessa outra página
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {...options, signal});
        if(!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (err) {
        if(!signal.aborted) {
          setError(err as Error);
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      //sempre que o componente for desmontado, o fetch será cancelado
      abortController.abort();
    }
  },[url])

  return { data, loading, error }
}

export default useFetch;
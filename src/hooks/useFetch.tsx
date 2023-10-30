import React from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url:URL|RequestInfo, options?:RequestInit):FetchState<T> {
  const [data, setData] = React.useState<T|null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string|null>(null);

  // para que o valor de options seja armazenado apenas uma vez (estático), usamos o useRef
  const optionsRef = React.useRef(options);

  // para que o valor de options seja atualizado toda vez que o hook for chamado
  optionsRef.current = options;

  React.useEffect(() => {
    const abortController = new AbortController(); //para evitar requisições desnecessárias, quando o usuário entra em uma página e logo em seguida acessa outra página
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true)
      setData(null);
      try {
        const response = await fetch(url, {...optionsRef.current, signal});
        if(!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const result = (await response.json()) as T;
        if(!signal.aborted) {
          setData(result);
          setLoading(false);
          setError(null);
        }
      } catch (err) {
        if(!signal.aborted && (err instanceof Error)) {
          setError(err.message);
          setLoading(false);
        }
      } finally {
        if(!signal.aborted) setLoading(false);
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
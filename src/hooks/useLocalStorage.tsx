import React from 'react';

const useLocalStorage = (key:string, initial:string): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ?? initial
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  },[key, state])

  return [state, setState]
}

export default useLocalStorage;
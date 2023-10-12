import React from 'react';
import Button from './Button';

function App() {
  const [total, setTotal] = React.useState(0); //inferencia

  function incrementar() { //tipo declarado
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button tamanho='1.5rem' onClick={incrementar}>
        Incrementar
      </Button>
    </div>
  );
}

export default App;

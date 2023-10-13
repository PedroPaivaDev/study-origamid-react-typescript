import React from 'react';
import Button from './Button';
import Input from './Input';

function App() {
  const [total, setTotal] = React.useState(0); //inferencia

  function incrementar() { //tipo declarado
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button
        id='botao-principal'
        className='btn'
        onClick={incrementar}
        tamanho='1.5rem'
      >
        Incrementar
      </Button>
      <Input id='teste' label='Teste' />
    </div>
  );
}

export default App;

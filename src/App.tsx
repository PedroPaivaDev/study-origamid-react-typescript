import React from 'react';
import Button from './Button';
import Input from './Input';

function App() {
  const [total, setTotal] = React.useState(0); //inferencia
  const [date, setDate] = React.useState('');

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
      <p>Início da Viagem: {date}</p>
      <Input id='teste' label='Teste' />
      <Input value={date} onChange={(e) => setDate(e.currentTarget.value)} id='day' label='Dia' type='date' />
      <Input id='hour' label='Hora' type='time' />
    </div>
  );
}

export default App;

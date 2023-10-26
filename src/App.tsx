import React from 'react';
import Button from './Button';
import Input from './Input';
import Checkbox from './Checkbox';

function user() {
  return {
    nome: 'André',
    profissao: 'Designer'
  }
}

type User = {
  nome: string;
  profissao: string;
}

function App() {
  const [total, setTotal] = React.useState(0); //inferencia
  const [date, setDate] = React.useState('');
  const [data, setData] = React.useState<null | User>(null);

  function incrementar() { //tipo declarado
    setTotal((total) => total + 1);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    },1000)
  },[])

  return (
    <div>
      <p>Total: {total}</p>
      <Button
        incrementar={setTotal}
        id='botao-principal'
        className='btn'
        onClick={incrementar}
        tamanho='1.5rem'
        // total={total}
        // setTotal={setTotal}
      >
        Incrementar
      </Button>
      <p>Início da Viagem: {date}</p>
      <Input id='teste' label='Teste' />
      <Input value={date} onChange={(e) => setDate(e.currentTarget.value)} id='day' label='Dia' type='date' />
      <Input id='hour' label='Hora' type='time' />
      <Checkbox label='Termos e Condições'/>
      {!data ?
        <div>Carregando...</div> :
        <div>{data.nome}: {data.profissao}</div>
      }
    </div>
  );
}

export default App;

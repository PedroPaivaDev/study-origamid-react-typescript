import React from 'react';
import Input from './Input';

interface Sale {
  data: string;
  id: string;
  nome: string;
  pagamento: 'pix' | 'cartao' | 'boleto';
  parcelas: number | null;
  preco: number;
  status: 'pago' | 'falha' | 'processando';
}

function App() {
  const [sales, setSales] = React.useState<Sale[]|null>(null);
  const [initialDate, setInitialDate] = React.useState<string>('');
  const [finalDate, setFinalDate] = React.useState<string>('');

  async function getSales(inicio:string, final:string) {
    const url = `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
    const data = await fetch(url);
    const json = data.json();
    return json;
  }

  React.useEffect(() => {
    if(initialDate.length===0 || finalDate.length===0 ) return;
    async function salesData(inicio:string, final:string) {
      const data = await getSales(inicio, final)
      setSales(data)
    }
    salesData(initialDate, finalDate)
  },[initialDate, finalDate])

  return (
    <div>
      <h1>Exercício da Aula 301</h1>
      <br/>
      <p>Defina a data de início e final, para visualizar o histórico de vendas nesse período.</p>
      <Input setState={setInitialDate} label='Data de Início' type='date'/>
      <Input setState={setFinalDate} label='Data Final' type='date'/>
      <br/>
      <h2>Histórico de Vendas:</h2>
      {sales && sales.map(sale =>
        <div key={sale.id}>
          <h3>{sale.nome}</h3>
          <p>R$ {sale.preco.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;

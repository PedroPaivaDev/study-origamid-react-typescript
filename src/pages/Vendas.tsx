import { useData } from '../contexts/DataContext';
import VendaItem from '../components/VendaItem';

const Vendas = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map(venda => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  )
}

export default Vendas
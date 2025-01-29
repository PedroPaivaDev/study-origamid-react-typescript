import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { IVenda } from "../contexts/DataContext"

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(' ')[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }

    acc[dia][item.status] += item.preco;

    return acc;
  }, {});

  return Object.values(dias).map(dia => ({ ...dia, data: dia.data.substring(5) }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart width={500} height={300} data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#8884d8" />
        <Line type="monotone" dataKey="processando" stroke="#82ca9d" />
        <Line type="monotone" dataKey="falha" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraficoVendas
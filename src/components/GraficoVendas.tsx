import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { IVenda } from "../contexts/DataContext"

const dadosGrafico = [
  {
    data: '2023-05-03',
    pago: 30000,
    processando: 20000,
    falha: 10000,
  },
  {
    data: '2023-05-03',
    pago: 30000,
    processando: 5000,
    falha: 20000,
  },
  {
    data: '2023-05-03',
    pago: 30000,
    processando: 20000,
    falha: 60000,
  }
]

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart width={500} height={300} data={dadosGrafico}>
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
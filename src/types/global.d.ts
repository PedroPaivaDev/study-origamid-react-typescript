interface Product {
  descricao: string;
  id: string;
  internacional: boolean;
  nome: string;
  preco: number;
  quantidade: number;
}

interface User {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: 'baixa' | 'media' | 'alta';
  };
}

interface Venda {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'falha' | 'processando';
  pagamento: 'pix' | 'cartao' | 'boleto';
  parcelas: number | null;
  data: string;
}
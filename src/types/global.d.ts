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
    qualidade: string;
  };
}
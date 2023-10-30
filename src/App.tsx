import useFetch from './hooks/useFetch';

const productsUrl = new URL('https://data.origamid.dev/produtos');

function App() {
  const {data, error, loading} = useFetch<Product[]>(productsUrl, {});

  if(loading) {
    return <p>Carregando...</p>
  }

  if(error) {
    return <p>Ocorreu um erro: {error.message}</p>
  }

  return (
    <div>
      <h1 style={{marginBottom:'70px'}}>Exercício da Aula 305</h1>
      <div>
        {data?.map(product =>
        <div key={product.id} style={{marginBottom:'70px'}}>
          <h2>{product.nome}</h2>
          <p>{product.descricao}</p>
          <h3>R$ {product.preco.toFixed(2)}</h3>
          <p>Quantidade: {product.quantidade}</p>
          <p>Produto nacional: {product.internacional ? 'sim' : 'não'}</p>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;

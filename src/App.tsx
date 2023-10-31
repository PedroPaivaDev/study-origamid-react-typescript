import React from 'react';
import useFetch from './hooks/useFetch';
import { UiContextProvider } from './contexts/UiContext';
import Header from './components/Header';
import Content from './components/Content';

const productsUrl = new URL('https://data.origamid.dev/produtos');

function App() {
  const products = useFetch<Product[]>(productsUrl, {});
  const [productId, setProductId] = React.useState<string|undefined>();
  const product = useFetch<Product>(`${productsUrl}/${productId}`, {
    cache: "force-cache" //para armazenar em cache um produto já buscado
  });

  if(products.loading) {
    return <p>Carregando...</p>
  }

  if(products.error) {
    return <p>Ocorreu um erro: {products.error}</p>
  }

  return (
    <div>
      <UiContextProvider>
        <Header />
        <Content />
        <h1 style={{marginBottom:'70px'}}>Exercício da Aula 305</h1>
        <section className='flex'>
          <div>
            {products.data?.map(product =>
            <button
              key={product.id}
              onClick={() => setProductId(product.id)}
            >
              {product.id}
            </button>
            )}
          </div>
          {product.loading && <p>Carregando...</p>}
          {typeof product.data?.id==='string' &&
            <ul key={product.data.id} style={{marginBottom:'70px'}}>
              <li>{product.data.nome}</li>
              <li>{product.data.descricao}</li>
              <li>R$ {product.data.preco.toFixed(2)}</li>
              <li>Quantidade: {product.data.quantidade}</li>
              <li>Produto nacional: {product.data.internacional ? 'sim' : 'não'}</li>
            </ul>
          }
        </section>
      </UiContextProvider>
    </div>
  );
}

export default App;

import { DataContextProvider } from './contexts/DataContext';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import Resumo from './pages/Resumo';
import Vendas from './pages/Vendas';

function App() {

  return (
    <DataContextProvider>
      <div className='container'>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;

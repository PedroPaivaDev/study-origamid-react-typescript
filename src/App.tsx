import Resumo from './pages/Resumo';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import { DataContextProvider } from './contexts/DataContext';

function App() {

  return (
    <DataContextProvider>
      <div className='container'>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;

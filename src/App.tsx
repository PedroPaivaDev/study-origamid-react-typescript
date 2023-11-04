import Resumo from './pages/Resumo';
import Sidenav from './components/SideNav';
import Header from './components/Header';
import { DataContextProvider } from './contexts/DataContext';

function App() {

  return (
    <DataContextProvider>
      <div>
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

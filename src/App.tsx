import React from 'react';

import { UiContextProvider } from './contexts/UiContext';
import { UserContext, UserContextProvider } from './contexts/UserContext';
import useFetch from './hooks/useFetch';

import Header from './components/Header';
import Content from './components/Content';

const usersUrl = 'https://data.origamid.dev/usuarios';

function App() {
  const users = useFetch<User[]>(usersUrl);
  const [userId, setUserId] = React.useState<number>(1);

  if(users.loading) {
    return <p>Carregando...</p>
  }

  if(users.error) {
    return <p>Ocorreu um erro: {users.error}</p>
  }

  return (
    <div>
      <UserContextProvider userUrl={`${usersUrl}/${userId}`}>
        <UiContextProvider>
          <Header/>
          <Content />
          <div className='flex'>
            {users && users.data?.map(user =>
              <button
                key={user.id}
                onClick={() => setUserId(user.id)}
              >
                {user.nome}
              </button>
            )}
          </div>
        </UiContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;

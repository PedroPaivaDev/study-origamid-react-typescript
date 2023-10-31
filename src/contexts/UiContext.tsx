import React from 'react';

type InitialUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const UiContext = React.createContext<InitialUiContext | null>(null);

export const useUi = () => {// função específica para usar o contexto, sem precisar verificar se ele é null
  const context = React.useContext(UiContext);
  if (!context) throw new Error('useContext deve estar dentro do Provider');
  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <UiContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

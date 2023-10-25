import React from 'react';

type ButtonProps2 = React.PropsWithChildren<{ //tipo utilitário para Children
  tamanho?: string;
  onClick: () => void;
}>;

type ButtonProps = 
  React.ComponentProps<'button'> &  //utilitário genérico com extensão de props
  {
    tamanho?: string;
  }
;

const Button = ({tamanho, children, ...props}:ButtonProps): React.ReactElement => {
  const handleClick: React.MouseEventHandler = (event: React.MouseEvent) => {
    // não é necessário tipar a função e o parâmetro, pois o TS já faz a inferência quando um dos dois é tipado
    console.log(event.pageX)
  }
  return (
    <button style={{fontSize: tamanho}}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
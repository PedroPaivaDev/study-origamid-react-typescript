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

const Button = ({tamanho, children, ...props}:ButtonProps) => {
  return (
    <button style={{fontSize: tamanho}}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;
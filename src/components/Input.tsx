import React from 'react';

type PropsInput = React.ComponentProps<'input'> & {
  label: string;
};

const Input = ({id, label, className, ...props}:PropsInput) => {
  return (
    <div className={className} style={{marginBottom: '1rem'}}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
    </div>
  )
}

export default Input;
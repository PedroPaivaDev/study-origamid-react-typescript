import React from 'react';

type PropsInput = React.ComponentProps<'input'> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({setState, id, label, className, ...props}:PropsInput) => {
  return (
    <div className={className} style={{marginBottom: '1rem'}}>
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(e) => setState(e.currentTarget.value)}
        id={id}
        {...props}
      />
    </div>
  )
}

export default Input;
import React from 'react';

type PropsDateInput = React.ComponentProps<'input'> & {
  label: string;
};

const DateInput = ({label, ...props}:PropsDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props}/>
    </div>
  )
}

export default DateInput;
import React from 'react';
import { useData } from '../contexts/DataContext';

const Resumo = () => {
  const {data} = useData();

  return (
    <div>Resumo</div>
  )
}

export default Resumo;
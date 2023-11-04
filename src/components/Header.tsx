import React from 'react';
import { useData } from '../contexts/DataContext';

const Header = () => {
  const {data} = useData();

  return (
    <div>
      Header
    </div>
  )
}

export default Header;
import React, { useState } from 'react';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');

  
  return (
    <MyContext value={  }>
      { children }
    </MyContext>
    
  )
}

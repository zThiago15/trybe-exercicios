import React, { useEffect, useState } from 'react'

export default function GenerateRandomNumber() {

  const [randomNumber, setRandomNumber] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const generate = Math.floor(Math.random() * 101);
      setRandomNumber(generate);
      // console.log(generate);
    }, 10000);

    // willUnmount
    return () => {
      clearInterval(timer);
    };
  }, [setRandomNumber]);

  return (
    <>
    <div>{randomNumber}</div>
    { randomNumber % 3 === 0 && randomNumber % 5 === 0 && <p>Acertou!</p>  }
    </>
  )
}

import './style.css';
import { useState, useEffect } from 'react';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 }
};



export const Rate = ({ from }) => {
  const [rate, setRate] = useState(currencies[from].CZK);
  
  useEffect( () => {
    const fetchRate = async () => {
    const response = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`);
    const data = await response.json();
    setRate(data.rates.CZK);
  }
  fetchRate();
  }), [from]; 

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};

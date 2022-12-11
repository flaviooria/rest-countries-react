import React, { useEffect, useState } from 'react'

export default function App() {
  const urlByName = 'https://restcountries.com/v3.1/name/';
  const urlByCode = 'https://restcountries.com/v3.1/alpha?codes=col,pe,arg';

  const [queryCountry, setQueryCountry] = useState('');
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    if (queryCountry.length >= 3) {
      return async () => {
        console.log('entra aquí')
        const response = await fetch(`${urlByName}/${queryCountry}`);
        const data = await response.json();

        console.log(data);
      }
    }
  },[queryCountry])


  const handleQueryCountrie = (e) => {
    setQueryCountry(e.target.value);
    console.log(queryCountry);
  }

  return (
    <>
      <h1>Descubriendo el mundo</h1>
      <section>
        <input type="search" name="searchCountry" placeholder='España' onChange={handleQueryCountrie}/>
        <button>Buscar</button>
      </section>
      <section>

      </section>
    </>
  )
}

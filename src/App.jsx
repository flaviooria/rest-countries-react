import React, { useEffect, useState } from 'react'

export default function App() {
    const urlByName = 'https://restcountries.com/v3.1/name/';
    const urlByCode = 'https://restcountries.com/v3.1/alpha?codes=col,pe,arg';

    const [queryCountry, setQueryCountry] = useState('');
    const [countries, setCountries] = useState([]);

    
    const handleQueryCountrie = (e) => {
        setQueryCountrie(e.target.value);
    }

  return (
    <>
        <h1>Descubriendo el mundo</h1>
        <section>
            <input type="search" name="searchCountry" placeholder='España' />
            <button>Buscar</button>
        </section>
        <section>

        </section>
    </>
  )
}

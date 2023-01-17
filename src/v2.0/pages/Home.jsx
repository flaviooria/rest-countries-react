import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarFields } from '../layouts/NavbarFields';
import { ListCardsCountries } from '../layouts/ListCardsCountries';
import Spinner from '../../shared/components/Spinner';

export default function Home() {
  const urlByName = 'https://restcountries.com/v3.1/name/';

  const [queryCountry, setQueryCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (queryCountry.length >= 3) {
      setIsLoading(true);
      const setCountrySearched = async () => {
        const response = await fetch(
          `${urlByName}/${queryCountry}?fields=name,borders,capital,region,subregion,population,flags,nativeName,tld,languages,currencies`
        );
        const data = await response.json();
        setTimeout(() => {
          setCountries([...data]);
          setIsLoading(false);
          setQueryCountry('');
        }, 1500);
      };

      setCountrySearched();
      navigate('/');
    }
  }, [queryCountry]);

  const handleQueryCountrie = (e) => {
    setQueryCountry(e.target.value);
  };
  return (
    <>
      <NavbarFields
        query={queryCountry}
        handleQuery={handleQueryCountrie}
        setCountries={setCountries}
        setLoading={setIsLoading}
      ></NavbarFields>
      {isLoading ? (
        <Spinner />
      ) : (
        <ListCardsCountries countries={countries}></ListCardsCountries>
      )}
    </>
  );
}

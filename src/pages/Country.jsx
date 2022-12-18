import React from 'react';
import { useLocation } from 'react-router-dom';
import CountryCard from '../layouts/country-card/CountryCard';

export default function Country() {
  const location = useLocation();

  return <CountryCard country={location.state} />;
}

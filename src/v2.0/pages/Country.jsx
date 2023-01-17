import React from 'react'
import { useLocation } from 'react-router-dom'
import CountryCard from '../layouts/CountryCard'

export default function Country() {
    const location = useLocation()
  return (
    <CountryCard country={location.state} />
  )
}

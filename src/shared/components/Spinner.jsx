import React from 'react';
import '../scss/components/spinner.scss';

export default function Spinner() {
  return (
    <>
      <div className="spinner-container">
        <div className="lds-dual-ring"></div>
      </div>
    </>
  );
}

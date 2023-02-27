import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border spinner-border-sm"
        role="status"
        style={{ width: '1.3rem', height: '1.3rem' }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

import React from 'react';


const Spinner = ({ show }) => {
  if (!show) {
    return null; // If show is false, do not render the spinner
  }

  return (
    <div className="Spinner">
      <div className="Spinner-inner"></div>
    </div>
  );
};

export default Spinner;
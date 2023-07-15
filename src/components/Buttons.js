import satData from "./satData";
import style from './styling.css';
import React from 'react';

const Buttons = (props) => {
  const displaySats = props.displaySats;
  const filterByType = props.filterByType;
  const setSat = props.setSat;

  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })
      }
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div >
  );
};

export default Buttons;
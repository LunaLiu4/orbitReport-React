import satData from './satData';
import style from './styling.css';
import React from 'react';

const Table = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.sat.map((data, id) =>
          <tr key={id}>
            <td >{data.name}</td>
            <td >{data.type}</td>
            <td >{data.launchDate}</td>
            <td >{`${data.operational}`}</td>
          </tr>)}
      </tbody>
    </table>
  );
};

export default Table;
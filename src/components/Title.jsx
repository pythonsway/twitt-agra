import React from 'react';

import './Title.css';
import logo from '../media/img/twitt-agra.png';

const Title = () => (
  <h1>
    <div className="title">
      <img src={logo} className="logo" alt="Twitt-agra logo" />
    </div>
  </h1>
);

export default Title;

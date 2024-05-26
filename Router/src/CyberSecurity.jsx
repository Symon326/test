// CyberSecurity.js
import React from 'react';
import './App.css'
import ai from './assets/images/AI.jpg'
import ds from './assets/images/ds.jpg'
import ml from './assets/images/ml.jpg'

function CyberSecurity() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <img src={ai} alt="Course 1" />
          <div className="caption">Course 1: ARTIFICIAL INTELLIGENCE</div>
        </div>
        <div className="card">
          <img src={ds} alt="Course 2" />
          <div className="caption">Course 2: DATA SCIENCE</div>
        </div>
        <div className="card">
          <img src={ml} alt="Course 3" />
          <div className="caption">Course 3: MACHINE LEARNING</div>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurity;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Components/Hello'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Hello titulo="ID" valor={15}>Denny</Hello>
  </div>
);



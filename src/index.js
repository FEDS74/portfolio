import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

import './index.css';


import App from './App';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter base>
    <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
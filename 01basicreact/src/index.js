import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*even if we remove react.strictmode it still runs..Strictmode is for optimization.

Also, it is  "react-scripts": "5.0.1" in package.json that runs javascript in html above case. 
We can check inpect --> body--> to see what are inserted automatically by react-scripts.
*/

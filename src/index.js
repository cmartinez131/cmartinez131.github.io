import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // using HashRouter because with GitHub Pages doesn't support server-side rendering
  <React.StrictMode>  
      <App />
  </React.StrictMode>
);

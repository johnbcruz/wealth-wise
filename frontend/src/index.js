import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalProvider } from './context/globalContext';
import App from './App';

const appElement = (
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(appElement);

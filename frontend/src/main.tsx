import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import Context from './context/index.tsx';
import { GlobalStyles } from './styles/global.style.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Context>
        <GlobalStyles />
        <App />
      </Context>
    </BrowserRouter>
  </StrictMode>,
);

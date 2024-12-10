import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { CardMessageProvider } from './context/useCardMessage.tsx';
import { ModalProvider } from './context/useModal.tsx';
import { UserLoggedProvider } from './context/useUserLogged.tsx';
import { GlobalStyles } from './styles/global.style.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CardMessageProvider>
        <UserLoggedProvider>
          <ModalProvider>
            <GlobalStyles />
            <App />
          </ModalProvider>
        </UserLoggedProvider>
      </CardMessageProvider>
    </BrowserRouter>
  </StrictMode>,
);

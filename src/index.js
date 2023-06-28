import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import 'modern-normalize';
import { UserProvider } from './components/userContext/UserContext';

import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);

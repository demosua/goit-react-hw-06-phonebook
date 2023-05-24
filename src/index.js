import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import { theme } from './constants/theme'
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

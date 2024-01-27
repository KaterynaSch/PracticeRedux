import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { store } from './redux/store';
// import { store } from 'redux/store'

const theme = {
  color: {
    white: '#fff',
    black: '#212121',
    green: 'green',
    blue: 'blue',
    orange: 'orange',
    error: 'red',
  },
  radii: {  
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/PracticeRedux">
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import theme from "./theme/index.js";
import {store} from "./app/store.js";
import GlobalStyles from "./styles/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <GlobalStyles />
              <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import theme from "./theme/index.js";
import {store} from "./app/store.js";
import GlobalStyles from "./styles/index.js";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <GlobalStyles/>
                    <App/>
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)

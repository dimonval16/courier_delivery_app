import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/store/store";
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {orange, red, green} from '@material-ui/core/colors';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: orange[800],
        },
        secondary: {
            light: orange[100],
            main: orange[300],
            contrastText: 'white'
        },
        error: {
            main: red[300]
        },
        good: {
            main: green[800]
        }
    }
});

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={mainTheme}>
                    <App/>
                </ThemeProvider>
            </Router>
        </Provider>,
    document.getElementById('root')
);
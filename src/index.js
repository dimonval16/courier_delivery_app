import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/store/store";
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {orange} from "@material-ui/core/colors";

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: orange[800],
        },
        secondary: {
            main: orange[300],
            contrastText: 'white'
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
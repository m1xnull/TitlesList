import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import { injectGlobal } from './styles';

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ModalProvider } from "./context/Web3ModalContext";
import providerOptions from "./utils/providerOptions";
import * as UAuthWeb3Modal from '@uauth/web3modal'

ReactDOM.render(
  <React.StrictMode>
    <Web3ModalProvider
      cacheProvider={true}
      providerOptions={providerOptions}
      onNewWeb3Modal={UAuthWeb3Modal.registerWeb3Modal}
    >
      <App />
    </Web3ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

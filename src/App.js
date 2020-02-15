import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store";

import { Modal } from "./containers";
import Routes from "./pages";

const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Modal />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;

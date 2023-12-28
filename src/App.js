import React from "react";
import "./App.css";
import Home from "./Components/Home";
import store from "./Utils/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;

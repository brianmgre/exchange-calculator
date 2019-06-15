import React, { Component } from "react";
import { getExchangeRates } from "./components/api";
import "./App.css";

class App extends Component {
  state = {
    baseCurrency: "USD",
    currencies: {}
  };

  componentDidMount() {
    this.fetchCurriencies(this.state.currencies);
  }

  fetchCurriencies = currencies => {
    getExchangeRates(this.state.baseCurrency, currencies);
  };

  render() {
    return <div className="App">heyo</div>;
  }
}

export default App;

import React, { Component } from "react";
import { getExchangeRates } from "./components/api";
import "./App.css";
import ExchangeGrid from "./components/exchangeGrid";

class App extends Component {
  state = {
    baseCurrency: "USD",
    baseAmount: (1.0).toFixed(4),
    rates: {},
    error: false
  };

  componentDidMount() {
    this.fetchCurriencies(this.state.rates);
  }

  fetchCurriencies = currencies => {
    getExchangeRates(this.state.baseCurrency, currencies)
      .then(response => {
        this.setState({
          rates: Object.assign(this.state.rates, response.rates)
        });
      })
      .catch(err => {
        this.setState({
          error: `There was an error fetching the currency`
        });
      });
  };

  render() {
    const { rates, baseCurrency, baseAmount } = this.state;
    console.log(this.state.rates);
    return (
      <div className="App">
        heyo
        <ExchangeGrid
          rates={rates}
          baseCurrency={baseCurrency}
          baseAmount={baseAmount}
        />
      </div>
    );
  }
}

export default App;

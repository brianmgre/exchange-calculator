import React, { Component } from "react";
import { getExchangeRates } from "./components/api";
import "./App.css";
import ExchangeGrid from "./components/exchangeGrid";
import AddMoreCurrencies from "./components/addMoreCurrencies";

class App extends Component {
  state = {
    baseCurrency: "USD",
    baseAmount: (1.0).toFixed(4),
    rates: {},
    error: false
  };

  componentDidMount() {
    this.fetchCurrencies(this.state.rates);
  }

  fetchCurrencies = currencies => {
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

  updateState = newRates => {
    this.setState({
      rates: newRates
    });
  };

  render() {
    const { rates, baseCurrency, baseAmount } = this.state;
    console.log("rate", this.state);
    return (
      <div className="App">
        heyo
        <ExchangeGrid
          rates={rates}
          baseCurrency={baseCurrency}
          baseAmount={baseAmount}
          updateState={this.updateState}
        />
        <AddMoreCurrencies fetchCurrencies={this.fetchCurrencies} />
      </div>
    );
  }
}

export default App;

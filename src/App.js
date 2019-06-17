import React, { Component } from "react";
import { getExchangeRates } from "./components/api";
import { styles } from "./components/styles/appStyles";
import { withStyles, Typography } from "@material-ui/core";
import ExchangeGrid from "./components/exchangeGrid";
import AddMoreCurrencies from "./components/addMoreCurrencies";
import BaseInput from "./components/baseInput";

class App extends Component {
  state = {
    baseCurrency: "USD",
    baseAmount: (1.0).toFixed(2),
    rates: {},
    error: null
  };

  componentDidMount() {
    this.fetchCurrencies(this.state.rates);
  }

  //set response from api call on state
  fetchCurrencies = currencies => {
    getExchangeRates(this.state.baseCurrency, currencies)
      .then(response => {
        this.setState({
          rates: Object.assign(this.state.rates, response.rates),
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: `There was an error fetching the currency`
        });
      });
  };

  //updates rates with a new object after a rate is removed
  updateRates = newRates => {
    this.setState({
      rates: newRates
    });
  };

  updateBaseAmount = newValue => {
    this.setState({
      baseAmount: newValue
    });
  };

  render() {
    const { rates, baseCurrency, baseAmount } = this.state;
    const { classes, error } = this.props;

    return (
      <div className={classes.root}>
        <BaseInput
          updateBaseAmount={this.updateBaseAmount}
          baseCurrency={baseCurrency}
        />
        <div className={classes.excBtnContainer}>
          <ExchangeGrid
            rates={rates}
            baseCurrency={baseCurrency}
            baseAmount={baseAmount}
            updateRates={this.updateRates}
          />

          <AddMoreCurrencies fetchCurrencies={this.fetchCurrencies} />
          {error && <Typography variant="body1">{error}</Typography>}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);

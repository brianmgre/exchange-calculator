import React, { Component } from "react";
import { TextField, Typography, withStyles } from "@material-ui/core";
import { currencyNames } from "./currencyHelper/allCurrencyNames";
import { baseInputStyles } from "./styles/baseInputStyle";
// import PropTypes from "prop-types";

class BaseInput extends Component {
  state = {
    inputAmount: (1.0).toFixed(2)
  };

  //sets changes on state
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //watches a change in state and updates base rate on Apps component
  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputAmount !== this.state.inputAmount) {
      this.props.updateBaseAmount(this.state.inputAmount);
    }
  }

  //prevents a rerender when a input is entered and submitted
  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    const { inputAmount } = this.state;
    const { baseCurrency, classes } = this.props;
    return (
      <form onSubmit={this.submitHandler} className={classes.baseForm}>
        <Typography variant="body1">
          {baseCurrency} - {currencyNames[baseCurrency].name_plural}
        </Typography>

        <div className={classes.baseCurrencyInput}>
          <Typography variant="h4" className={classes.baseRateHeader}>
            {baseCurrency}
          </Typography>
          <TextField
            name="inputAmount"
            value={inputAmount}
            onChange={this.changeHandler}
            className={classes.input}
            InputProps={{
              classes: {
                input: classes.resize
              },
              disableUnderline: true
            }}
          />
        </div>
      </form>
    );
  }
}

// BaseInput.propTypes = {
//   updateBaseAmount: PropTypes.func.isRequired,
//   baseCurrency: PropTypes.string.isRequired
// };

export default withStyles(baseInputStyles)(BaseInput);

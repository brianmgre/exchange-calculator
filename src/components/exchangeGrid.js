import React from "react";
import PropTypes from "prop-types";
import { currencyNames } from "./currencyHelper/allCurrencyNames";
import { gridStyles } from "./styles/gridStyles";
import { withStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
const numeral = require("numeral");

function ExchangeGrid(props) {
  const { rates, baseCurrency, baseAmount, updateRates, classes } = props;

  //filters object to remove a rate
  const removeRate = rate => {
    const newRates = Object.keys(rates).reduce((object, key) => {
      if (key !== rate) {
        object[key] = rates[key];
      }
      return object;
    }, {});

    updateRates(newRates);
  };

  // maps over all rates and returns layout to render
  const allRates = Object.entries(rates).map(([key, value]) => (
    <div className={classes.grid} key={key}>
      <Grid container wrap="nowrap" spacing={2} className={classes.gridItems}>
        <Grid item className={classes.abbrRate}>
          <Typography variant="h4" className={classes.abbrExchangeRate}>
            {key}
          </Typography>
          <Typography variant="h4" className={classes.abbrExchangeRate}>
            {numeral(value.toFixed(2) * baseAmount).format("0, 0.00")}
          </Typography>
        </Grid>
        <Grid item className={classes.rateName}>
          <Typography variant="body1" className={classes.text}>
            {key} - {currencyNames[key].name}
          </Typography>
        </Grid>
        <Grid item className={classes.baseToRate}>
          <Typography variant="body1" className={classes.text}>
            1 {baseCurrency} = {key} {value.toFixed(4)}
          </Typography>
        </Grid>
      </Grid>

      <button onClick={() => removeRate(key)} className={classes.removeBtn}>
        <Icon id="subtract" className={classes.addSubtract}>
          remove_circle_outline
        </Icon>
      </button>
    </div>
  ));

  return <React.Fragment>{allRates}</React.Fragment>;
}

ExchangeGrid.propTypes = {
  rates: PropTypes.object.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  baseAmount: PropTypes.string.isRequired,
  updateRates: PropTypes.func.isRequired
};

export default withStyles(gridStyles)(ExchangeGrid);

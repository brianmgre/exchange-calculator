import React from "react";
import { currencyNames } from "./allCurrencyNames.js";

function ExchangeGrid(props) {
  const { rates, baseCurrency, baseAmount, updateState } = props;

  const removeRate = rate => {
    const newRates = Object.keys(rates).reduce((object, key) => {
      if (key !== rate) {
        object[key] = rates[key];
      }
      return object;
    }, {});

    updateState(newRates);
  };

  const allRates = Object.entries(rates).map(([key, value]) => (
    <div key={key}>
      <p>
        {key}: {value.toFixed(4) * baseAmount}
      </p>
      <p>
        {key}- {currencyNames[key].name}
      </p>
      1 {baseCurrency} = {key} {value.toFixed(4)}
      <p />
      <button onClick={() => removeRate(key)}>( - )</button>
    </div>
  ));

  return <div>{allRates}</div>;
}

export default ExchangeGrid;

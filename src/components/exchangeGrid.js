import React from "react";
import { currencyNames } from "./newmoney";

function ExchangeGrid(props) {
  const { rates, baseCurrency, baseAmount } = props;
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
    </div>
  ));

  return <div>{allRates}</div>;
}

export default ExchangeGrid;

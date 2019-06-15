import axios from "axios";

const startingCurrencies = [
  "CAD",
  "IDR",
  "GBP",
  "CHF",
  "SGD",
  "INR",
  "MYR",
  "JPY",
  "KRW"
];
const url = "https://api.exchangeratesapi.io/latest?";

export async function getExchangeRates(base, currencies) {
  let y = "";

  if (currencies.length === undefined) {
    y = startingCurrencies.join(",");
  } else {
    y = currencies;
  }

  const g = await axios.get(`${url}base=${base}&symbols=${y}`);
  return g.data;
}

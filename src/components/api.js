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
  try {
    let currencyGroup = "";

    if (currencies.length === undefined) {
      currencyGroup = startingCurrencies.join(",");
    } else {
      currencyGroup = currencies;
    }

    const exchangeRates = await axios.get(
      `${url}base=${base}&symbols=${currencyGroup}`
    );

    return exchangeRates.data;
  } catch {
    return "There was an error with your request";
  }
}

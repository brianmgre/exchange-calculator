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

//checks to see if a new currency is passed. When component mounts starting currencies with be added
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
    throw new Error("There was an error with your request");
  }
}

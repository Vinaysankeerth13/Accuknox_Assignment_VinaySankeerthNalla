export const convertCurrency = (amount, fromCurrency, ToCurrency) => {
  const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    INR: 82.5,
  };

  const amountInUSD = amount / rates[fromCurrency];
  return (amountInUSD * rates[ToCurrency]).toFixed(2);
};

export const baseInputStyles = theme => ({
  baseForm: {
    borderBottom: "1px solid #333333",
    padding: "10px 10px 10px 10px",
    color: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column"
  },

  baseCurrencyInput: {
    display: "flex",
    justifyContent: "space-between"
  },

  resize: {
    textAlign: "right",
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },

  baseRateHeader: {
    fontWeight: "bold"
  }
});

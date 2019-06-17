export const gridStyles = theme => ({
  grid: {
    border: "1px solid #333333",
    margin: "10px 0 10px 0",
    display: "flex",
    backgroundColor: theme.palette.secondary.main,
    color: "white"
  },
  gridItems: {
    flexDirection: "column",
    padding: "10px 5px 10px 5px"
  },

  abbrRate: {
    display: "flex",
    justifyContent: "space-between"
  },

  text: {
    padding: 0,
    margin: 0,
    lineHeight: 0.3
  },

  baseToRate: {
    fontStyle: "italic"
  },

  abbrExchangeRate: {
    lineHeight: ".6",
    padding: 0
  },
  addSubtract: {
    color: theme.palette.primary.main,
    fontSize: "2rem"
  },

  removeBtn: {
    backgroundColor: "white",
    border: "none",
    borderLeft: "1px solid #333333",
    "&:hover": {
      cursor: "pointer"
    }
  }
});

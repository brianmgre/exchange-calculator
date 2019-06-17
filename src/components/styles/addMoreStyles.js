export const addMoreStyles = theme => ({
  submitBtn: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: 1,
    border: "2px solid #333333",
    marginBottom: 10,
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    "&:hover": {
      cursor: "pointer"
    }
  },

  add: {
    fontSize: "20px",
    padding: 1
  },

  addMore: {
    padding: "0 0 0 5px",
    fontSize: "1.6rem"
  },

  newRateForm: {
    display: "flex",
    marginBottom: 10
  },

  input: {
    width: "80%"
  },
  resize: {
    padding: 10,
    fontSize: "1.6rem"
  },

  submitNew: {
    width: "20%",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      cursor: "pointer"
    }
  }
});

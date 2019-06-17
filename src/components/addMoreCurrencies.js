import React, { Component } from "react";
import { TextField, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { addMoreStyles } from "./styles/addMoreStyles";
import Icon from "@material-ui/core/Icon";

class AddMoreCurrencies extends Component {
  state = {
    newRate: "",
    openForm: false
  };

  //open and close submit form
  toggleForm = () => {
    this.setState({
      openForm: !this.state.openForm
    });
  };

  //sets state as user types new rate
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //clears form
  clearForm = () => {
    this.setState({
      newRate: ""
    });
  };

  //submits rate entered to api, first checks to see if valid abbr
  submitHandler = event => {
    const { newRate } = this.state;
    event.preventDefault();

    if (newRate.length !== 3) {
      this.clearForm();
      this.toggleForm();
    } else {
      this.props.fetchCurrencies(this.state.newRate.toUpperCase());
      this.toggleForm();
      this.clearForm();
    }
  };

  render() {
    const { newRate, openForm } = this.state;
    const { classes } = this.props;

    if (openForm === false) {
      return (
        <button onClick={this.toggleForm} className={classes.submitBtn}>
          <Icon id="add" className={classes.add}>
            add_circle_outline
          </Icon>
          <Typography className={classes.addMore}>
            Add More Currencies
          </Typography>
        </button>
      );
    } else {
      return (
        <form onSubmit={this.submitHandler} className={classes.newRateForm}>
          <TextField
            name="newRate"
            value={newRate}
            onChange={this.changeHandler}
            variant="outlined"
            className={classes.input}
            InputProps={{
              classes: {
                input: classes.resize
              }
            }}
          />
          <button type="submit" className={classes.submitNew}>
            Submit
          </button>
        </form>
      );
    }
  }
}

AddMoreCurrencies.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired
};
export default withStyles(addMoreStyles)(AddMoreCurrencies);

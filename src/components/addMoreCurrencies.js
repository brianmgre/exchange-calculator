import React, { Component } from "react";
import { TextField, Typography } from "@material-ui/core";

class AddMoreCurrencies extends Component {
  state = {
    newRate: "",
    openForm: false
  };

  toggleForm = () => {
    this.setState({
      openForm: !this.state.openForm
    });
  };

  changeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  clearForm = () => {
    this.setState({
      newRate: ""
    });
  };

  submitHandler = event => {
    const { newRate } = this.state;

    event.preventDefault();
    if (newRate.length !== 3) {
      this.clearForm();
    } else {
      this.props.fetchCurrencies(this.state.newRate.toUpperCase());
      this.toggleForm();
      this.clearForm();
    }
  };

  render() {
    const { newRate, openForm } = this.state;

    console.log(this.state);

    if (openForm === false) {
      return <h1 onClick={this.toggleForm}>add Rate?</h1>;
    } else {
      return (
        <form onSubmit={this.submitHandler}>
          <TextField
            name="newRate"
            value={newRate}
            onChange={this.changeHandler}
            // className={classes.input}
            // InputProps={{
            //   classes: {
            //     input: classes.resize
            //   }
            // }}
          />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
}

export default AddMoreCurrencies;

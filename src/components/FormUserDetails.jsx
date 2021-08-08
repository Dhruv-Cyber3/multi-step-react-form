import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <>
        <AppBar position="static">
          <Typography variant="h4" align="center">
            Enter User Details
          </Typography>
        </AppBar>
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          defaultValue={values.firstName}
          margin="normal"
          onChange={this.props.handleChange("firstName")}
        />{" "}
        <br />
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          defaultValue={values.lastName}
          margin="normal"
          onChange={this.props.handleChange("lastName")}
        />{" "}
        <br />
        <TextField
          placeholder="Enter Your Email"
          label="Email"
          defaultValue={values.email}
          margin="normal"
          onChange={this.props.handleChange("email")}
        />{" "}
        <br />
        <Button
          style={styles.button}
          endIcon={<NavigateNext />}
          color="primary"
          variant="contained"
          onClick={this.continue}
        >
          Continue
        </Button>
      </>
    );
  }
}

const styles = {
  button: {
    margin: 20,
  },
};

export default FormUserDetails;

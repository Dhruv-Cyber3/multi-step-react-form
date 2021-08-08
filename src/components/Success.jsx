import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";

export class Success extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Typography variant="h4" align="center">
            Success
          </Typography>
        </AppBar>
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions.</p>
      </>
    );
  }
}

export default Success;

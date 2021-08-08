import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <>
        <AppBar position="static">
          <Typography variant="h4" align="center">
            Enter Personal Details
          </Typography>
        </AppBar>
        <TextField
          placeholder="Enter Your Occupation"
          label="Occupation"
          defaultValue={values.occupation}
          margin="normal"
          onChange={this.props.handleChange("occupation")}
        />{" "}
        <br />
        <TextField
          placeholder="Enter Your City"
          label="City"
          defaultValue={values.city}
          margin="normal"
          onChange={this.props.handleChange("city")}
        />{" "}
        <br />
        <TextField
          placeholder="Enter Your Bio"
          label="Bio"
          defaultValue={values.bio}
          margin="normal"
          onChange={this.props.handleChange("bio")}
        />{" "}
        <br />
        <Button
          style={styles.button}
          startIcon={<NavigateBefore />}
          color="default"
          variant="contained"
          onClick={this.back}
        >
          Back
        </Button>
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

export default FormPersonalDetails;

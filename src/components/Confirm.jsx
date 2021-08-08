import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Box, Button, ListItemText, Typography } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    //process your form-> send data to backend
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <>
        <AppBar position="static">
          <Typography variant="h4" align="center">
            Confirm User Data
          </Typography>
        </AppBar>
        <Box display="flex" justifyContent="center" alignItems="center">
          <List>
            <ListItem button>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
        </Box>
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
          Confirm & Continue
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

export default Confirm;

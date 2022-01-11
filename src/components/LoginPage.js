import React from "react";

import { Grid, ThemeProvider, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

import { theme } from "../theme";

import GoogleSignIn from "./GoogleSignIn";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
  },
});

const LoginPage = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Grid
          className={classes.root}
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h3">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Sign in with Google</Typography>
          </Grid>
          <Grid item xs={12}>
            <GoogleSignIn />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;

import React from "react";

import { Grid, ThemeProvider, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { theme } from "../theme";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../authentication/authentication";
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
  let history = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

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
            {/* <Button onClick={useGoogleAuth} variant="contained" color="primary">
              <GoogleIcon fontSize="large" />
            </Button> */}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;

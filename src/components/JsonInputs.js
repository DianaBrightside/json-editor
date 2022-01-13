import { Grid, makeStyles, TextField } from "@material-ui/core";
import AddInstanceBtn from "./AddInstanceBtn";

const useStyles = makeStyles({
  grid: {
    minWidth: "100%",
    textAlign: "center",
  },
  input: {
    width: "50%",
  },
});

const JsonInputs = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid className={classes.grid} item xs={12}>
        <TextField
          required
          className={classes.input}
          label="Category"
          variant="outlined"
        />
      </Grid>
      <Grid className={classes.grid} item xs={12}>
        <TextField
          required
          className={classes.input}
          label="Name"
          variant="outlined"
        />
      </Grid>
      <Grid className={classes.grid} item xs={12}>
        <TextField
          required
          className={classes.input}
          label="Size"
          variant="outlined"
        />
      </Grid>
      <Grid className={classes.grid} item xs={12}>
        <AddInstanceBtn />
      </Grid>
    </Grid>
  );
};

export default JsonInputs;

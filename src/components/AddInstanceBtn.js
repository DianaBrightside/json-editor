import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    marginBottom: "10px",
  },
});

const AddInstanceBtn = () => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained" color="primary">
      Add instance
    </Button>
  );
};

export default AddInstanceBtn;

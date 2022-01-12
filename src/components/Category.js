import { Link } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

const Category = ({ category, dataPath }) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.link}
      to={{
        pathname: `/json/${category}`,
        search: dataPath,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h5">
              <Box sx={{ p: 2, textAlign: "center" }}>{category}</Box>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Link>
  );
};

export default Category;

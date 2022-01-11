import { Link } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@material-ui/core";

const Category = ({ category, dataPath }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography variant="h5">
            <Box sx={{ p: 2, textAlign: "center" }}>
              <Link
                to={{
                  pathname: `/json/${category}`,
                  search: dataPath,
                }}
              >
                {category}
              </Link>
            </Box>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Category;

import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography variant="h5">
            <Box sx={{ p: 2, textAlign: "center" }}>
              <Link to="/json">{category}</Link>
            </Box>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Category;

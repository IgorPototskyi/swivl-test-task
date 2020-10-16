import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

import routes from "../config/routes";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h6" className={classes.title}>
        Page Not Found
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        to={routes.USERS_LIST}
        component={Link}
      >
        Go to Main Page
      </Button>
    </Grid>
  );
};

export default NotFound;

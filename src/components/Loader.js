import React from "react";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <CircularProgress />
    </Grid>
  );
};

export default Loader;

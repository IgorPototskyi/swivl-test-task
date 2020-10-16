import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import routes from "../config/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 20,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={routes.USERS_LIST} className={classes.link}>
            <Typography className={classes.title}>Swivl Test Task</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

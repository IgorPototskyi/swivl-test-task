import React from "react";
import { Route, Switch } from "react-router";
import { makeStyles } from "@material-ui/core";

import UsersList from "./UsersList";
import User from "./User";
import Header from "./Header";
import NotFound from "./NotFound";
import routes from "../config/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    maxWidth: 920,
    margin: `0 auto`,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <main>
      <Header />
      <div className={classes.root}>
        <Switch>
          <Route path={routes.USERS_LIST} exact component={UsersList} />
          <Route path={routes.USER} exact component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </main>
  );
};

export default App;

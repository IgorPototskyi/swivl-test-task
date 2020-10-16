import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from "@material-ui/core";

import { getUser, clearUser } from "../store/actions/users";
import routes from "../config/routes";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
  item: {
    padding: theme.spacing(1),
  },
  title: {
    width: 120,
    fontWeight: 600,
  },
  backButton: {
    marginTop: theme.spacing(2),
  },
}));

const FIELDS = [
  {
    title: "Name",
    key: "name",
    type: "text",
  },
  {
    title: "Followers",
    key: "followers",
    type: "text",
  },
  {
    title: "Following",
    key: "following",
    type: "text",
  },
  {
    title: "Created At",
    key: "created_at",
    type: "date",
  },
  {
    title: "Company",
    key: "company",
    type: "text",
  },
  {
    title: "Email",
    key: "email",
    type: "text",
  },
  {
    title: "Location",
    key: "location",
    type: "text",
  },
  {
    title: "Blog",
    key: "blog",
    type: "text",
  },
  {
    title: "Bio",
    key: "bio",
    type: "text",
  },
];

const User = () => {
  const { login } = useParams();
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (login) {
      dispatch(getUser(login));
    }
    return () => {
      dispatch(clearUser());
    };
  }, [login]);

  return (
    <div>
      <Typography align="center" variant="h4" className={classes.header}>
        User: {login}
      </Typography>
      {user ? (
        <>
          <Grid>
            {FIELDS.map(({ title, key, type }) => {
              const value =
                type === "date"
                  ? new Date(user[key]).toLocaleDateString()
                  : user[key];
              return (
                <Grid container key={key} className={classes.item}>
                  <Typography
                    className={classes.title}
                  >{`${title}: `}</Typography>
                  <Typography className={classes.value}>
                    {value || "-"}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>

          <Button
            component={Link}
            to={routes.USERS_LIST}
            color="primary"
            variant="outlined"
            className={classes.backButton}
          >
            Back to Users
          </Button>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default User;

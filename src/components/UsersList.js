import React, { useEffect } from "react";
import { useHistory, generatePath } from "react-router";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";

import { getUsers } from "../store/actions/users";
import { Typography } from "@material-ui/core";
import routes from "../config/routes";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(1),
  },
  nextButton: {
    margin: theme.spacing(1, 0),
  },
  headCell: {
    color: theme.palette.primary.main,
    fontSize: 20,
  },
  headCellAvatar: {
    width: 132,
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.grey[50],
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  tableCell: {
    fontSize: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    display: "block",
    borderRadius: theme.shape.borderRadius,
  },
}));

const UsersList = () => {
  const usersList = useSelector((state) => state.users.list);
  const currentUrl = useSelector((state) => state.users.currentUrl);
  const nextUrl = useSelector((state) => state.users.nextUrl);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsers(currentUrl));
  }, []);

  const handleClick = (e, login) => {
    history.push(generatePath(routes.USER, { login }));
  };

  const handleNextClick = () => {
    dispatch(getUsers(nextUrl));
  };

  const renderNextButton = () => (
    <Grid container justify="flex-end">
      <Button
        color="primary"
        onClick={handleNextClick}
        className={classes.nextButton}
      >
        Next Page
      </Button>
    </Grid>
  );

  return (
    <div>
      <Typography align="center" variant="h4" className={classes.header}>
        Users List
      </Typography>
      {nextUrl && renderNextButton()}

      {usersList.length ? (
        <TableContainer component={Paper}>
          <Table aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.headCell}>Login</TableCell>
                <TableCell className={classes.headCell}>Profile link</TableCell>
                <TableCell
                  className={cx(classes.headCell, classes.headCellAvatar)}
                >
                  Avatar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList.map(({ id, login, html_url, avatar_url }) => (
                <TableRow
                  key={id}
                  className={classes.tableRow}
                  hover
                  onClick={(e) => handleClick(e, login)}
                >
                  <TableCell className={classes.tableCell}>{login}</TableCell>
                  <TableCell className={classes.tableCell}>
                    {html_url}
                  </TableCell>
                  <TableCell>
                    <img
                      src={avatar_url}
                      alt="avatar"
                      className={classes.avatar}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loader />
      )}
      {nextUrl && renderNextButton()}
    </div>
  );
};

export default UsersList;

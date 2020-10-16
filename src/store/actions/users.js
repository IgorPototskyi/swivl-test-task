import parse from "parse-link-header";

import * as types from "../actionTypes";

const BASE_URL = "https://api.github.com";
const PER_PAGE = 100;
const SINCE = "2020-01-01T00:00:00Z";
const BASE_USERS_URL = `${BASE_URL}/users?per_page=${PER_PAGE}&since=${SINCE}`;

export const getUsers = (url) => {
  return async (dispatch) => {
    try {
      const currentUrl = url || BASE_USERS_URL;
      const res = await fetch(currentUrl);
      if (res.ok) {
        const users = await res.json();
        const linkHeader = res.headers.get("link");
        const parsedLinkHeader = parse(linkHeader);
        dispatch({
          type: types.SET_USERS,
          payload: {
            users,
            currentUrl,
            nextUrl: parsedLinkHeader.next.url,
          },
        });
      } else {
        console.error(`Http error: ${res.status}`);
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export const getUser = (login) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}/users/${login}`);
      if (res.ok) {
        const user = await res.json();
        dispatch({
          type: types.SET_USER,
          payload: user,
        });
      } else {
        console.error(`Http error: ${res.status}`);
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export const clearUser = () => {
  return async (dispatch) => {
    dispatch({
      type: types.CLEAR_USER,
    });
  };
};

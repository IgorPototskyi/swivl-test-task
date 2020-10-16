import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4c9ceb",
      contrastText: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;

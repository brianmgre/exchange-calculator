import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: {
      main: "#333333"
    },
    primary: {
      main: "#ED3632"
    }
  }
});

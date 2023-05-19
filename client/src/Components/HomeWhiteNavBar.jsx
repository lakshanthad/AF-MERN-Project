import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#1a8b1f",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(10),
    color: "#1a8b1f",
  },
}));

export default function HomeWhiteNavbar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              LAAIF
            </Typography>
            <div>
              <Button color="secondary" href="/">Home</Button>
              <Button color="secondary" href="/aboutus">About</Button>
              <Button color="secondary">Contact</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));
export default function AgriStaffNavbar() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/agriForm");
  }

  const handleLogoutClick = () => {
    navigate("/landingGrassroot");
  };
  return (
    <AppBar position="static" style={{ backgroundColor: "#1a8b1f" }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          NAVBAR - Staff - Agri
        </Typography>
        <div className="ml-auto">
          <Button
            variant="outlined"
            color="inherit"
            className={classes.button}
            onClick={handleAddNew}
          >
            Add New
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            className={classes.button}
            onClick={handleLogoutClick}
          >
            Log out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}





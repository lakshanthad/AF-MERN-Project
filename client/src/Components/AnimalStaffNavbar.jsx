import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default function AnimalStaffNavbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAddNew = () => {
    navigate("/animal");
  };

  const handleMenuClick = () => {
    navigate("/selectionStaff");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#1a8b1f" }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          NAVBAR - Staff - Animal
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
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            Menu
          </Button>
        
        
        </div>
      </Toolbar>
    </AppBar>
  );
}

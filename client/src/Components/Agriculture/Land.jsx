// this is just a sample code to fill up the component

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: theme.spacing(1),
    width: "300px",
  },
}));

const AutocompleteExample = () => {
  const classes = useStyles();

  const [region, setRegion] = useState("");
  const [division, setDivision] = useState("");

  const regions = [
    { label: "Rathnapura", value: "Rathnapura" },
    { label: "Kegalle", value: "Kegalle" },
  ];

  const divisionsByRegion = {
    Rathnapura: [
      { label: "Ratnapura Division 1", value: "Ratnapura Division 1" },
      { label: "Ratnapura Division 2", value: "Ratnapura Division 2" },
    ],
    Kegalle: [
      { label: "Kegalle Division 1", value: "Kegalle Division 1" },
      { label: "Kegalle Division 2", value: "Kegalle Division 2" },
    ],
  };

  const handleRegionChange = (event, newValue) => {
    setRegion(newValue);
    setDivision("");
  };

  const divisions = region
    ? divisionsByRegion[region]
    : [];

  return (
    <div className={classes.container}>
      <Autocomplete
        disablePortal
        id="region-autocomplete"
        options={regions}
        getOptionLabel={(option) => option.label}
        value={region}
        onChange={handleRegionChange}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.input}
            label="Region"
            variant="outlined"
          />
        )}
      />
      <Autocomplete
        disablePortal
        id="division-autocomplete"
        options={divisions}
        getOptionLabel={(option) => option.label}
        value={division}
        onChange={(event, newValue) => {
          setDivision(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.input}
            label="Division"
            variant="outlined"
          />
        )}
        disabled={!region}
      />
    </div>
  );
};

export default AutocompleteExample;

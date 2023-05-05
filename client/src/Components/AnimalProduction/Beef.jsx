import  { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';




const theme = createTheme({
  palette: {
    primary: {
      main: '#1a8b1f', // Set your desired primary color here
    },
  },
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
    width: '50%',
  },
  button: {
    margin: theme.spacing(2),
    width: '25%',
  },

  root: {
    display: 'flex',
    margin: theme.spacing(1.5),
    gap: theme.spacing(3),
    alignItems: 'center',
  },

}));

export default function Beef() {
  const classes = useStyles();
  const [animal, setAnimal] = useState({
    name: '',
    species: '',
    age: '',
    habitat: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(animal); // replace with your API call or data handling logic
  };

  const Region = [
    { label: 'Rathnapura', region: "Rathnapura" },
    { label: 'Kegalle', region: "Kegalle" },
  ];

  const Division = [
    { label: 'Rabukkana', division: "Rabukkana" }, // Kegalle divisions list starts
    { label: 'Mavanalla', division: "Mavanalla" },
    { label: 'Aranayake', division: "Aranayake" },
    { label: 'Kegalle', division: "Kegalle" },
    { label: 'Galigamuwa', division: "Galigamuwa" },
    { label: 'Varakapola', division: "Varakapola" },
    { label: 'Ruwanwalla', division: "Ruwanwalla" },
    { label: 'Bulathkohupitiya', division: "Bulathkohupitiya" },
    { label: 'Yatiyanthota', division: "Yatiyanthota" },
    { label: 'Dehiowita', division: "Dehiowita" },
    { label: 'Daraniyagala', division: "Daraniyagala" },
    { label: 'Undugoda', division: "Undugoda" }, // Kegalle divisions list ends

    // enter rathnapura divisions list here
  ];

  return (
    <ThemeProvider theme={theme}>
      
    <form className={classes.form} onSubmit={handleSubmit}>
    
    <h1>Cow Details</h1>
    <div className={classes.root}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      options={Region}
      renderInput={(params) => <TextField {...params} label="Region" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      options={Division}
      renderInput={(params) => <TextField {...params} label="Division" />}
    />
    </div>


      <TextField
        className={classes.input}
        label="Population"
        variant="outlined"
        name="species" // name from the animal object
        value={animal.species}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Consuption per person"
        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
        variant="outlined"
        name="age"
        value={animal.age}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Consumption per year"
        variant="outlined"
        color='primary'
        name="habitat"
        value={animal.habitat}
        onChange={handleChange}
      />

      <TextField
        className={classes.input}
        label="Production Surplus / Deficit"
        variant="outlined"
        color='primary'
        name="habitat"
        value={animal.habitat}
        onChange={handleChange}
      />

<TextField
        className={classes.input}
        label="Avg weight of cows"
        variant="outlined"
        color='primary'
        name="habitat"
        value={animal.habitat}
        onChange={handleChange}
      />

<TextField
        className={classes.input}
        label="Amount of cows to increase production"
        variant="outlined"
        color='primary'
        name="habitat"
        value={animal.habitat}
        onChange={handleChange}
      />
   
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
    </ThemeProvider>
  );
}



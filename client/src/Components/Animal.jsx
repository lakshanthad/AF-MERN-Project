import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    width: '80%',
  },
  button: {
    margin: theme.spacing(2),
    width: '80%',
  },
}));

function AnimalForm() {
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

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        label="Name"
        variant="outlined"
        name="name"
        value={animal.name}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Species"
        variant="outlined"
        name="species"
        value={animal.species}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Age"
        variant="outlined"
        name="age"
        value={animal.age}
        onChange={handleChange}
      />
      <TextField
        className={classes.input}
        label="Habitat"
        variant="outlined"
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
  );
}

export default AnimalForm;

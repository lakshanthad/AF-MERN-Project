import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function SelectionPage() {
  const navigate = useNavigate();

  const handleAnimalClick = () => {
    navigate("/AnimalDataTable");
  };

  const handleAgriClick = () => {
    navigate("/agriTable");
  };

  return (
    <div>
      <center>
        <Button variant="contained" color="primary" onClick={handleAnimalClick}>
          Animal
        </Button>{" "}
        <Button variant="contained" color="primary" onClick={handleAgriClick}>
          Agriculture
        </Button>
      </center>
    </div>
  );
}

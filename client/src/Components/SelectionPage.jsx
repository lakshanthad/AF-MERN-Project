// import React from "react";
import { useNavigate } from "react-router-dom";
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
        <Button variant="primary" onClick={handleAnimalClick}>
          Animal
        </Button>{" "}
        <Button variant="primary" onClick={handleAgriClick}>
          Agriculture
        </Button>
      </center>
    </div>
  );
}

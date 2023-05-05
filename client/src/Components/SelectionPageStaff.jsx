import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function SelectionPageStaff() {
  const navigate = useNavigate();

  const handleAnimalClick = () => {
    navigate("/animalServices");
  };

  const handleAgriClick = () => {
    navigate("/agriServices");
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

import React from "react";
import { useParams } from "react-router-dom";

function Accomodations() {
  let { id } = useParams();
  return (
    <div>
      <div>Page des logements (en construction)</div>
      <div>Ici nous regardons le logement n°{ id } 🏠</div>
    </div>
  );
}

export default Accomodations;

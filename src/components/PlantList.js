import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handlePlantStock }) {
  const arrayListCard = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return <ul className="cards">{arrayListCard}</ul>;
}

export default PlantList;

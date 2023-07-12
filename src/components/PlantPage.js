import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = `http://localhost:6001/plants`;

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [plantArray, setPlantArray] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setPlantArray(data);
      });
  }, []);

  function handleAddPlant(newPlant) {
    const updatedNewArray = [...plants, newPlant];
    setPlantArray(updatedNewArray);
    setPlants(updatedNewArray);
  }

  function handleArray(search) {
    const plantArray = plants.filter((plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase())
    );
    setPlantArray(plantArray);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search handleArray={handleArray} />
      <PlantList plants={plantArray} />
    </main>
  );
}

export default PlantPage;

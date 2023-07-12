import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stocked, setStocked] = useState(true);
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {stocked ? (
        <button className="primary" onClick={() => setStocked(!stocked)}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

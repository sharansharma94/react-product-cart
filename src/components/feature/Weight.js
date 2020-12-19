import React from "react";

export default function Feature({
  title,
  product,
  handleCaratWeight,
  caratWeight,
}) {
  return (
    <div className="detail_types">
      <h3> Total Carat Weight </h3>
      <div className="row detail_buttons">
        {product.stone.weight.map((weight) => {
          return (
            <button
              key={weight.id}
              onClick={() => handleCaratWeight(weight)}
              className={caratWeight.id === weight.id ? "active" : ""}
            >
              {weight.carat_weight}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";

export default function Size({title, product, metalSize, handleMetalSize}) {
  return (
    <div className="detail_types">
      <h3> {title} </h3>
      <div className="row detail_buttons">
        {product.stone.sizes.map((size) => {
          return (
            <button
              key={size}
              onClick={() => handleMetalSize(size)}
              className={metalSize === size ? "active" : ""}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

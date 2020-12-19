import React from "react";

import Quality from "./feature/Quality";
import Weight from "./feature/Weight";
import Type from "./feature/Type";
import Size from "./feature/Size";

export default function Product({
  product,
  gemQuality,
  handleGemQuality,
  caratWeight,
  handleCaratWeight,
  metalType,
  handleMetalType,
  imageUrl,
  handleMetalSize,
  metalSize,
  price,
  handleAddItems,
}) {
  return (
    <div>
      <h3>{product.name}</h3>
      <div className="row details">
        <img className="small col-1" src={imageUrl} alt="product" />
        <div className="col-1">
          <Quality
            title="Gem Quality"
            product={product}
            gemQuality={gemQuality}
            handleGemQuality={handleGemQuality}
          ></Quality>

          <Weight
            title="Total Carat Weight"
            product={product}
            caratWeight={caratWeight}
            handleCaratWeight={handleCaratWeight}
          ></Weight>

          <Type
            title="Metal Type"
            product={product}
            metalType={metalType}
            handleMetalType={handleMetalType}
          ></Type>

          <Size
            title="Metal Size"
            product={product}
            metalSize={metalSize}
            handleMetalSize={handleMetalSize}
          ></Size>
        </div>
      </div>
      <div>Price : {price}</div>
      <button className="btn-wide" onClick={() => handleAddItems(product)}>
        Add to Cart
      </button>
    </div>
  );
}

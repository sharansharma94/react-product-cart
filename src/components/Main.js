import React from "react";
import Product from "./Product";

export default function Main({
  products,
  currentProduct,
  handleProduct,
  gemQuality,
  handleGemQuality,
  caratWeight,
  handleCaratWeight,
  metalType,
  handleMetalType,
  imageUrl,
  metalSize,
  handleMetalSize,
  price,
  handleAddItems
}) {
  return (
    <main className="block col-2">
      <h2>Product</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              currentProduct={currentProduct}
              handleProduct={handleProduct}
              gemQuality={gemQuality}
              handleGemQuality={handleGemQuality}
              caratWeight={caratWeight}
              handleCaratWeight={handleCaratWeight}
              metalType={metalType}
              handleMetalType={handleMetalType}
              imageUrl={imageUrl}
              metalSize={metalSize}
              handleMetalSize={handleMetalSize}
              price={price}
              handleAddItems={handleAddItems}
            ></Product>
          );
        })}
      </div>
    </main>
  );
}

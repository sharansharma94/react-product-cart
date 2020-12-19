import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";

import data from "./data";

import { useState, useEffect } from "react";

function App() {
  const [currentProduct, setcurrentProduct] = useState(data.products[0]);

  const [gemQuality, setGemQuality] = useState({
    type: "better",
    price: 1500,
  });
  const [caratWeight, setCaratWeight] = useState({
    id: "B",
    carat_weight: 1.1,
    price: 300,
  });
  const [metalType, setMetalType] = useState({
    id: "RG",
    name: "14k Rose Gold",
    price: 1000,
  });
  const [price, setPrice] = useState(
    gemQuality.price * (caratWeight.price + metalType.price)
  );
  const [metalSize, setMetalSize] = useState(7);
  const [imageUrl, setImageUrl] = useState("");

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const imageUrl = `../images/products/${currentProduct.id}/${gemQuality.type}-${caratWeight.id}-${metalType.id}.webp`;
    setImageUrl(imageUrl);
  }, [gemQuality, caratWeight, metalType, currentProduct.id]);

  useEffect(() => {
    setPrice(gemQuality.price + caratWeight.price + metalType.price);
  }, [gemQuality, caratWeight, metalType]);

  const handleAddItems = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      const selectedFeatures = {
        gemQuality,
        caratWeight,
        metalType,
        metalSize,
      };
      setCartItems([
        ...cartItems,
        { ...product, qty: 1, price, selectedFeatures },
      ]);
    }
  };

  const handleRemoveItems = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const handleGemQuality = (quality) => {
    setGemQuality(quality);
  };

  const handleCaratWeight = (weight) => {
    setCaratWeight(weight);
  };

  const handleMetalType = (type) => {
    setMetalType(type);
  };

  const handleMetalSize = (size) => {
    setMetalSize(size);
  };
  const { products } = data;

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <section className="row">
        <Main
          products={products}
          currentProduct={currentProduct}
          handleProduct={setcurrentProduct}
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
        ></Main>

        <Cart
          handleAddItems={handleAddItems}
          cartItems={cartItems}
          price={price}
          handleRemoveItems={handleRemoveItems}
        ></Cart>
      </section>
    </div>
  );
}

export default App;

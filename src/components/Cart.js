import React from "react";

export default function Cart({
  handleAddItems,
  handleRemoveItems,
  cartItems,
  price,
}) {

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 20000 ? 0 : 300;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {console.log(cartItems)}
      {cartItems.map((item) => {
        return (
          <div key={item.id}>

            <div  className="row">
              <div className="col-2">{item.name}</div>

              <div className="col-2 cart-btn">
                <button onClick={() => handleAddItems(item)} className="add">
                  {" "}
                  +{" "}
                </button>
                <button
                  onClick={() => handleRemoveItems(item)}
                  className="remove"
                >
                  {" "}
                  -{" "}
                </button>
              </div>

              <div className="col-2">
                {item.qty} x {price}
              </div>
            </div>
            

            <hr></hr>
            <div className="row">
                Selected Quality :{item.selectedFeatures.gemQuality.type}
            </div>
            <div className="row">
                Selected Weight :{item.selectedFeatures.caratWeight.carat_weight}
            </div>
            <div className="row">
                Selected Type :{item.selectedFeatures.metalType.name}
            </div>
            <div className="row">
                Selected Size :{item.selectedFeatures.metalSize}
            </div>
          </div>
        );
      })}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Item Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Total Price</div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
        </>
      )}
    </aside>
  );
}

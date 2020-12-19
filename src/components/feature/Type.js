import React from 'react'

export default function Feature({title,product,handleMetalType,metalType}) {
    return (
      <div className="detail_types">
            <h3> {title} </h3>
            <div className="row detail_buttons">
              {product.stone.type.map((type) => {
                return (
                  <button
                    key={type.id}
                    onClick={() => handleMetalType(type)}
                    className={metalType.id === type.id ? "active" : ""}
                  >
                    {type.name}
                  </button>
                );
              })}
            </div>
          </div>
    )
}

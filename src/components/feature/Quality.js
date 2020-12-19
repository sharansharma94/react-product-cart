import React from 'react'

export default function Feature({title,product,handleGemQuality,gemQuality}) {
    return (
        <div>
            <div className="detail_types">
            <h3> {title} </h3>
            <div className="row detail_buttons">
              {product.stone.quality.map((quality) => {
                return (
                  <button
                    key={quality.type}
                    onClick={() => handleGemQuality(quality)}
                    className={gemQuality.type === quality.type ? "active" : ""}
                  >
                    {quality.type}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
    )
}

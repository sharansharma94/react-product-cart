import React from 'react'

export default function Header({countCartItems}) {
    return (
        <header className="row block center">
            Angara Assignment 
            <div className="cart-btn">
                Cart
                {countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ):''}
            </div>
        </header>
    )
}

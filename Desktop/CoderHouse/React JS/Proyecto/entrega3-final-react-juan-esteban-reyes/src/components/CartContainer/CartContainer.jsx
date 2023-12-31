import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import "./cartContainer.css";

function CartContainer() {
  const { cart, removeItem, getTotaPriceInCart, clearCart } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1 className="cart-title">Carrito Vacío</h1>
        <Link className="buy-link" to="/">Ir a comprar</Link>
      </div>
    )
  }
  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>
      {cart.map((item) => (
        <div key={item} className="cart-item">
          {console.log(item.id)}
          <h2 className="item-title">{item.nombre}</h2>
          <p className="item-price">Precio unitario: ${item.precio}</p>
          <p className="item-count">Cantidad a comprar: {item.count}</p>
          <p className="item-total-price">Precio total ${item.count * item.precio}</p>
          <button className="remove-button" onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}
      <br />
      <div className="total-container">Total de la compra: {getTotaPriceInCart()}</div>
      <Link className="checkout-button" to="/checkout">Comprar</Link>
      <button className="checkout-button-2" onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}

export default CartContainer;


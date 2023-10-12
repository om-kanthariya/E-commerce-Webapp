import React from "react";
import { Link } from "react-router-dom";
import earphone from "../../assets/earphone.jpg";
import camera from "../../assets/camera.jpg";
import iphone from "../../assets/iphone.jpg";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Earphone"}
          img={earphone}
          value={0}
          increment={() => increment()}
          decrement={() => decrement()}
        />
        <CartItem
          title={"Camera"}
          img={camera}
          value={0}
          increment={() => increment()}
          decrement={() => decrement()}
        />
        <CartItem
          title={"Iphone"}
          img={iphone}
          value={0}
          increment={() => increment()}
          decrement={() => decrement()}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;

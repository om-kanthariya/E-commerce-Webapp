import React from "react";
import MenuCard from "./MenuCard";
import earphone from "../../assets/earphone.jpg";
import camera from "../../assets/camera.jpg";
import iphone from "../../assets/iphone1.jpg";
import laptop from "../../assets/laptop.jpg";
import iphone1 from "../../assets/iphone.jpg";
import laptop1 from "../../assets/laptop1.jpg";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={earphone}
          price={200}
          title="Earphone"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={iphone}
          price={500}
          title="IPhone"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={laptop}
          price={1800}
          title="Laptop"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
      <div style={{marginTop: "10px"}}>
        <MenuCard
          itemNum={1}
          burgerSrc={camera}
          price={200}
          title="Nikon Camera"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={iphone1}
          price={500}
          title="IPhone 14"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={laptop1}
          price={1800}
          title="HP Laptop"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;

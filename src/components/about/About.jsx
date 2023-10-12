import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/me.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Go KART SHOPPING</h4>
          <p>
           Shop Smart, Shop Online
          </p>

          <p>
          Fashion, Electronics, and More at Your Fingertips
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Designed By</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Om Kanthariya</h3>
            </div>

            <p>
            Bringing the Mall to Your Doorstep.......Shopping malls often feature a wide range of stores selling different types of products, from clothing and electronics to home goods and more. The tagline suggests that this e-commerce platform offers a similar breadth of product categories, providing a diverse shopping experience.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Om Kanthariya</h3>

        <p>
        Bringing the Mall to Your Doorstep
          <br />
          Online shopping platforms often use algorithms and data analysis to recommend products based on your past purchases and preferences. This can make your online shopping experience feel tailored to your needs and tastes, much like wandering through a mall where different stores offer various products that may interest you..
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;

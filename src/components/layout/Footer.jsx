import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Go KART SHOPPING</h2>

        <p>We are trying to give you the best Price possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @GoKARTSHOPPING</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https">
          <AiFillYoutube />
        </a>
        <a href="https">
          <AiFillInstagram />
        </a>
        <a href="https">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;

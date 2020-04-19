import React from "react";
import PropTypes from "prop-types";
import styles from "./SignalDescription.module.scss";

const SignalDescription = () => (
  <div className={styles.SignalDescription}>
    <h2>Our Analysis</h2>
    <article class="message">
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </article>
  </div>
);

SignalDescription.propTypes = {};

SignalDescription.defaultProps = {};

export default SignalDescription;

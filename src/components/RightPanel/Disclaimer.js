import React, { useState } from "react";
import styles from "./Disclaimer.module.css";

function Disclaimer() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={styles.disclaimerContainer}>
      <button
        className={styles.disclaimerButton}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Disclaimer
      </button>
      <div
        className={
          isExpanded ? styles.disclaimerText : styles.disclaimerTextHidden
        }
      >
        <p>
          This website is for entertainment and showcase purposes only.
          Information contained on this website is not meant to serve as
          financial advice.
        </p>
        <p>
          Any financial investment has a risk attached to it. Invest
          responsibly.
        </p>
        <p>
          Cryptickers.com is not responsible for the accuracy of the data
          provided by an external API.
        </p>
      </div>
    </div>
  );
}

export default Disclaimer;

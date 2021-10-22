import React from "react";
import styles from "./RightPanel.module.css";
import DetailsContainer from "./DetailsContainer";
import Disclaimer from "./Disclaimer";

function RightPanel({ details }) {
  return (
    <div className={styles.rightPanel}>
      <DetailsContainer details={details} />
      <Disclaimer />
    </div>
  );
}

export default RightPanel;

import React, { useState } from "react";
import styles from "./DetailsContainer.module.css";
import parse from "html-react-parser";

function DetailsContainer({ details }) {
  const parsedDetails = details.description && parse(details.description.en);

  return details ? (
    <div className={styles.detailsContainer}>
      <div className={styles.description}>{parsedDetails}</div>
    </div>
  ) : null;
}

export default DetailsContainer;

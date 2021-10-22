import React from "react";
import styles from "./TopContainer.module.css";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

function TopContainer({ topData }) {
  return (
    <div className={styles.topContainer}>
      <TopLeft dataLeft={topData} />
      <TopRight dataRight={topData} />
    </div>
  );
}

export default TopContainer;

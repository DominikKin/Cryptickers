import React from "react";
import styles from "./TopRight.module.css";

function TopRight({ dataRight }) {
  return dataRight ? (
    <div
      className={
        dataRight.price_change_24h >= 0
          ? styles.topRightUp
          : styles.topRightDown
      }
    >
      <h2 className={styles.topRightTitle}>Last 24 hours</h2>
      <div className={styles.topRightDetails}>
        <div className={styles.detailsLabels}>
          <h2>Change</h2>
          <h2>Change %</h2>
        </div>
        <div className={styles.detailsValues}>
          <h2>
            {dataRight.price_change_24h.toLocaleString("en", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
          <h2>
            {dataRight.price_change_percentage_24h.toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            %
          </h2>
        </div>
      </div>
    </div>
  ) : null;
}

export default TopRight;

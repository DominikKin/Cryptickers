import React from "react";
import styles from "./TopLeft.module.css";

function TopLeft({ dataLeft }) {
  return dataLeft ? (
    <div className={styles.topLeft}>
      <div className={styles.title}>
        <img src={dataLeft.image} alt="" />
        <h2>{dataLeft.name}</h2>
      </div>
      <div className={styles.detailsLabels}>
        <h2>Symbol</h2>
        <h2>Price</h2>
        <h2>Market Cap</h2>
      </div>
      <div className={styles.detailsValues}>
        <h2 className={styles.symbol}>{dataLeft.symbol}</h2>
        <h2>
          {dataLeft.current_price.toLocaleString("en", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
        <h2>
          {dataLeft.market_cap.toLocaleString("en", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h2>
      </div>
    </div>
  ) : null;
}

export default TopLeft;

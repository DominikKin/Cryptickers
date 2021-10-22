import React from "react";
import styles from "./BottomCard.module.css";

function BottomCard({ data }) {
  return (
    <div className={styles.bottomCard}>
      <h3>{data.name}</h3>
      <p
        className={data.price_change_24h >= 0 ? styles.price : styles.priceDrop}
      >
        {data.current_price.toLocaleString("en", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}

export default BottomCard;

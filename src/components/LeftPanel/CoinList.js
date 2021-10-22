import React from "react";
import styles from "./CoinList.module.css";

function CoinList({
  filteredCoinList,
  setMainCoin,
  mainCoin,
  setExpand,
  setDateRange,
}) {
  return filteredCoinList ? (
    <div className={styles.coinList}>
      {filteredCoinList.map((coin) => (
        <button
          className={
            coin === mainCoin ? styles.coinListBtnSelected : styles.coinListBtn
          }
          key={coin}
          onClick={() => {
            setMainCoin(coin);
            setExpand(false);
            setDateRange(30);
          }}
        >
          {coin}
        </button>
      ))}
    </div>
  ) : null;
}

export default CoinList;

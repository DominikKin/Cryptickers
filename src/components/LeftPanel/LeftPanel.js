import React, { useState, useEffect } from "react";
import styles from "./LeftPanel.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import CoinList from "./CoinList";
import Search from "./Search";

function LeftPanel({ coinList, setMainCoin, mainCoin, setDateRange }) {
  const [expand, setExpand] = useState(false);
  const [filteredCoinList, setFilteredCoinList] = useState(coinList);
  useEffect(() => {
    setFilteredCoinList(coinList);
  }, [coinList]);

  function filterCoins(input) {
    const filteredList = coinList.filter((coin) => {
      if (input === "") {
        return coin;
      } else return coin.includes(input);
    });
    setFilteredCoinList(filteredList);
  }
  return (
    <div className={expand ? styles.leftPanel : styles.leftPanelHidden}>
      <div className={styles.expandButton} onClick={() => setExpand(!expand)}>
        <BsFillArrowRightCircleFill
          className={expand ? styles.expandIconRev : styles.expandIcon}
        />
      </div>
      <h2>More Coins</h2>
      <CoinList
        filteredCoinList={filteredCoinList}
        setMainCoin={setMainCoin}
        mainCoin={mainCoin}
        setExpand={setExpand}
        setDateRange={setDateRange}
      />
      <Search filterCoins={filterCoins} expand={expand} />
    </div>
  );
}

export default LeftPanel;
